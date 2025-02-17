import {
	deleteBusinessPerson,
	deleteYouthuralPerson,
	findUniquePersonOfBusiness,
	findUniquePersonOfYouthUral,
	updateBusinessPersonStatus,
	updateYouthuralPersonStatus,
} from '@/api/register';
import crypto from 'crypto';

export async function POST(req: Request) {
	const data = await req.json();
	const formData = await req.formData();

	console.log(data);

	const outSum = formData.get('OutSum')?.toString();
	const invId = formData.get('InvId')?.toString();
	const signatureValue = formData
		.get('SignatureValue')
		?.toString()
		.toLowerCase();

	const merchantPass2 = `${process.env.MRC_PASS_2}`;

	// Генерация подписи для проверки
	const correctSignature = crypto
		.createHash('md5')
		.update(`${outSum}:${invId}:${merchantPass2}`)
		.digest('hex')
		.toUpperCase();

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
		currentPerson,
		currentTableName,
	});

	if (!currentPerson || !invId) {
		console.log('Пользователь не найден');
		return;
	}

	if (correctSignature === signatureValue && currentPerson) {
		console.log(`Платеж прошел успешно! ID заказа: ${invId}, сумма: ${outSum}`);

		if (currentTableName === 'business') {
			await updateBusinessPersonStatus(currentPerson?.id, 'payed');
		} else if (currentTableName === 'youthural') {
			await updateYouthuralPersonStatus(currentPerson?.id, 'payed');
		}

		return new Response(`OK${invId}`, { status: 200 });
	} else {
		console.log(`Ошибка: неверная подпись для заказа с ID: ${invId}`);

		if (currentTableName === 'business') {
			await deleteBusinessPerson(currentPerson.id);
		} else if (currentTableName === 'youthural') {
			await deleteYouthuralPerson(currentPerson.id);
		}

		return new Response('Invalid signature', { status: 400 });
	}
}
