// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
	const { price } = await req.json();

	console.log(price);

	// Настройки для Робокассы
	const mrhLogin = `${process.env.MRC_LOGIN}`;
	const mrhPass1 = `${process.env.MRC_PASS_1}`;
	const mrhPass1Test = `${process.env.MRH_PASS_1_TEST}`;
	const mrhPass2Test = `${process.env.MRH_PASS_2_TEST}`;

	// Данные для заказа
	const invId = 0; // Уникальный ID заказа
	const invDesc = 'Добровольное пожертвование'; // Описание заказа
	const outSum = price; // Сумма платежа
	const isTest = 0;

	// Генерация подписи (CRC)
	const crc = crypto
		.createHash('md5')
		.update(`${mrhLogin}:${outSum}:${invId}:${mrhPass1}`)
		.digest('hex');

	// Формирование URL для Робокассы
	const url = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${mrhLogin}&OutSum=${outSum}&InvId=${invId}&Description=${encodeURIComponent(invDesc)}&SignatureValue=${crc}&IsTest=${isTest}`;

	// Отправляем сгенерированный URL на клиент
	return NextResponse.json({ paymentUrl: url });
}
