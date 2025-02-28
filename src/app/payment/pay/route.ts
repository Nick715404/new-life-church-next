import crypto from 'crypto';
import { registrySwitcher } from '@/utils/register/register-switcher';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const data = await req.json();

	const mrhLogin = `${process.env.MRC_LOGIN}`;
	const mrhPass1 = `${process.env.MRH_PASS_1_TEST}`;

	const invId = Math.floor(Math.random() * 1000000); // Уникальный ID заказа
	const invDesc = 'Dobrovolnoye pojertvovanie'; // Описание заказа
	const outSum = data.price; // Сумма платежа
	const isTest = 1;

	// Генерация подписи (CRC)
	const crc = crypto
		.createHash('md5')
		.update(`${mrhLogin}:${outSum}:${invId}:${mrhPass1}`)
		.digest('hex');

	// Формирование URL для Робокассы
	const url = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${mrhLogin}&OutSum=${outSum}&InvId=${invId}&Description=${encodeURIComponent(
		invDesc
	)}&SignatureValue=${crc}&IsTest=${isTest}`;

	await registrySwitcher(data, invId, data.eventType);

	// Отправляем сгенерированный URL на клиент
	return NextResponse.json({ paymentUrl: url });
}
