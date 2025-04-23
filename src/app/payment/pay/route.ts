import crypto from 'crypto';
import { registrySwitcher } from '@/utils/register/register-switcher';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const data = await req.json();

	const mrhLogin = `${process.env.MRC_LOGIN}`;
	const mrhPass1 = `${process.env.MRC_PASS_1}`;

	const invId = Math.floor(Math.random() * 1000000);
	const invDesc = 'Dobrovolnoye pojertvovanie';
	const outSum = data.price;
	const isTest = 0;

	const crc = crypto
		.createHash('md5')
		.update(`${mrhLogin}:${outSum}:${invId}:${mrhPass1}`)
		.digest('hex');

	const url = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=${mrhLogin}&OutSum=${outSum}&InvId=${invId}&Description=${encodeURIComponent(
		invDesc
	)}&SignatureValue=${crc}&IsTest=${isTest}`;

	await registrySwitcher(data, invId, data.eventType);

	return NextResponse.json({ paymentUrl: url });
}
