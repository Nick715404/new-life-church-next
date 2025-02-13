// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
	const { price } = await req.json();

	// Настройки для Робокассы
	const mrhLogin = 'chelwolrus';
	const mrhPass1 = 'Z40HVdcuY3NwbL9qhR0a'; // Твой первый пароль от Робокассы
	const mrhPass1Test = 'E4yDEi3zLvRCk42TB4Gy';
	const mrhPass2Test = 'v8gR6IDycL2JzyYPL6Q9';

	// Данные для заказа
	const invId = 5; // Уникальный ID заказа
	const invDesc = 'desc'; // Описание заказа
	const outSum = price.toFixed(2); // Сумма платежа
	const isTest = 1;

	// Генерация подписи (CRC)
	const crc = crypto
		.createHash('md5')
		.update(`${mrhLogin}:${outSum}:${invId}:${mrhPass1Test}`)
		.digest('hex');

	// Формирование URL для Робокассы
	const url = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${mrhLogin}&OutSum=${outSum}&InvId=${invId}&Description=${encodeURIComponent(invDesc)}&SignatureValue=${crc}&IsTest=${isTest}`;

	// Отправляем сгенерированный URL на клиент
	return NextResponse.json({ paymentUrl: url });
}
