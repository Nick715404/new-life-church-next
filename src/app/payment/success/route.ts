import {
	deleteBusinessPerson,
	deleteYouthuralPerson,
	findUniquePersonOfBusiness,
	findUniquePersonOfYouthUral,
	updateBusinessPersonStatus,
	updateYouthuralPersonStatus,
} from '@/api/register';
import {
	sendPaymentSuccessYouthuralEmail,
	sendPaymentSuccessBusinessEmail,
	sendPaymentErrorBusinessEmail,
	sendPaymentErrorYouthuralEmail,
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

	// Генерация подписи для проверки
	const correctSignature = crypto
		.createHash('md5')
		.update(`${outSum}:${invId}:${merchantPass2}`)
		.digest('hex')
		.toLowerCase();

	console.log('Полученные данные:', { outSum, invId, signatureValue });
	console.log('Сгенерированная подпись:', correctSignature);
	console.log('Ожидаемая подпись:', signatureValue);

	const findPersonFunctions = [
		{ findPerson: findUniquePersonOfBusiness, tableName: 'business' },
		{ findPerson: findUniquePersonOfYouthUral, tableName: 'youthural' },
	];

	let currentPerson = null;
	let currentTableName = '';

	for (let { findPerson, tableName } of findPersonFunctions) {
		currentPerson = await findPerson(`${invId}`);
		if (currentPerson) {
			currentTableName = tableName;
			break;
		}
	}

	console.log({
		currentPerson: currentPerson?.data,
		currentTableName,
	});

	if (!currentPerson || !invId) {
		console.log('Пользователь не найден');
		return;
	}

	if (correctSignature === signatureValue && currentPerson) {
		console.log(`Платеж прошел успешно! ID заказа: ${invId}, сумма: ${outSum}`);

		if (currentTableName === 'business') {
			// await updateBusinessPersonStatus(currentPerson?.id, 'payed');
			// await sendPaymentSuccessBusinessEmail(
			// 	'',
			// 	''
			// );
		} else if (currentTableName === 'youthural') {
			// await updateYouthuralPersonStatus(00, 'payed');
			// await sendPaymentSuccessYouthuralEmail(
			// 	currentPerson.attributes.email,
			// 	currentPerson.attributes.first_name
			// );
		}

		return new Response(`OK${invId}`, { status: 200 });
	} else {
		console.log(`Ошибка: неверная подпись для заказа с ID: ${invId}`);

		if (currentTableName === 'business') {
			// await deleteBusinessPerson(currentPerson.id);
			// await sendPaymentErrorBusinessEmail(
			// 	currentPerson.attributes.email,
			// 	currentPerson.attributes.first_name
			// );
		} else if (currentTableName === 'youthural') {
			// await deleteYouthuralPerson(currentPerson.id);
			// await sendPaymentErrorYouthuralEmail(
			// 	currentPerson.attributes.email,
			// 	currentPerson.attributes.first_name
			// );
		}

		return new Response('Invalid signature', { status: 400 });
	}
}
