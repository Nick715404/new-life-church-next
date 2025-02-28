import {
	deleteBusinessPerson,
	deleteFaithConfsPerson,
	deleteYouthuralPerson,
	findUniquePersonOfBusiness,
	findUniquePersonOfFaithConf,
	findUniquePersonOfYouthUral,
	updateBusinessPersonStatus,
	updateFaithConfPersonStatus,
	updateYouthuralPersonStatus,
} from '@/api/register';
import {
	sendPaymentSuccessYouthuralEmail,
	sendPaymentSuccessBusinessEmail,
	sendPaymentErrorBusinessEmail,
	sendPaymentErrorYouthuralEmail,
	sendPaymentSuccessFaithConfEmail,
	sendPaymentErrorFaithConfEmail,
} from '@/utils/emails';
import crypto from 'crypto';

export async function POST(req: Request) {
	const formData = await req.formData();

	const outSum = formData.get('OutSum')?.toString();
	const invId = formData.get('InvId')?.toString();
	const signatureValue = formData
		.get('SignatureValue')
		?.toString()
		.toLowerCase();

	const merchantPass2 = `${process.env.MRH_PASS_2_TEST}`;

	const correctSignature = crypto
		.createHash('md5')
		.update(`${outSum}:${invId}:${merchantPass2}`)
		.digest('hex')
		.toLowerCase();

	const findPersonFunctions = [
		{ findPerson: findUniquePersonOfBusiness, tableName: 'business' },
		{ findPerson: findUniquePersonOfYouthUral, tableName: 'youthural' },
		{ findPerson: findUniquePersonOfFaithConf, tableName: 'faithconf' },
	];

	let currentPerson = null;
	let currentTableName = '';

	for (let { findPerson, tableName } of findPersonFunctions) {
		currentPerson = await findPerson(`${invId}`);
		if (currentPerson && currentPerson.data.length > 0) {
			currentTableName = tableName;
			break;
		}
	}

	if (!currentPerson || !invId) {
		console.log('Пользователь не найден');
		return;
	}

	console.log('Зарегистрирован пользователь - ', {
		...currentPerson?.data[0].attributes,
	});
	console.log(
		`Пользователь зарегистрирован на мероприятие - ${currentTableName}`
	);
	console.log('Дополнительные данные заказа - ', {
		price: outSum,
	});

	if (correctSignature === signatureValue && currentPerson) {
		console.log(`Платеж прошел успешно! ID заказа: ${invId}, сумма: ${outSum}`);

		if (currentTableName === 'business') {
			await updateBusinessPersonStatus(currentPerson?.data[0].id, 'payed');
			await sendPaymentSuccessBusinessEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		} else if (currentTableName === 'youthural') {
			await updateYouthuralPersonStatus(currentPerson?.data[0].id, 'payed');
			await sendPaymentSuccessYouthuralEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		} else if (currentTableName === 'faithconf') {
			await updateFaithConfPersonStatus(currentPerson?.data[0].id, 'payed');
			await sendPaymentSuccessFaithConfEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		}

		return new Response(`OK${invId}`, { status: 200 });
	} else {
		console.log(`Ошибка: неверная подпись для заказа с ID: ${invId}`);

		if (currentTableName === 'business') {
			await deleteBusinessPerson(currentPerson?.data[0].id);
			await sendPaymentErrorBusinessEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		} else if (currentTableName === 'youthural') {
			await deleteYouthuralPerson(currentPerson?.data[0].id);
			await sendPaymentErrorYouthuralEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		} else if (currentTableName === 'faithconf') {
			await deleteFaithConfsPerson(currentPerson?.data[0].id);
			await sendPaymentErrorFaithConfEmail(
				currentPerson?.data[0].attributes.email,
				currentPerson?.data[0].attributes.first_name
			);
		}

		return new Response('Invalid signature', { status: 400 });
	}
}
