// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendDataToBusiness } from '@/api/register';
import { registrySwitcher } from '@/utils/register/register-switcher';

type TClientData = {
	first_name: string;
	last_name: string;
	sur_name: string;
	phone: string;
	email: string;
	city: string;
	church: string;
	vector: string;
	source: string;
	pastor_type: string;
	eventType: 'business' | 'youthural';
	personType: string;
	price: number;
	occupation: string | null;
};

export async function POST(req: Request) {
	const data = await req.json();

	const mrhLogin = `${process.env.MRC_LOGIN}`;
	const mrhPass1 = `${process.env.MRC_PASS_1}`;

	const invId = Math.floor(Math.random() * 1000000); // Уникальный ID заказа
	const invDesc = 'Добровольное пожертвование'; // Описание заказа
	const outSum = data.price; // Сумма платежа
	const isTest = 0;

	// Генерация подписи (CRC)
	const crc = crypto
		.createHash('md5')
		.update(`${mrhLogin}:${outSum}:${invId}:${mrhPass1}`)
		.digest('hex');

	// Формирование URL для Робокассы
	const url = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${mrhLogin}&OutSum=${outSum}&InvId=${invId}&Description=${encodeURIComponent(invDesc)}&SignatureValue=${crc}&IsTest=${isTest}`;

	await registrySwitcher(data, invId, data.eventType);

	// Отправляем сгенерированный URL на клиент
	return NextResponse.json({ paymentUrl: url });
}
