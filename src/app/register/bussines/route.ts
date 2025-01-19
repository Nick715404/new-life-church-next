// route.ts
'use server';

import { render } from '@react-email/render';
import Email from '../../../components/emails/ui/BussinesEmail';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

type TEmailBody = {
	id: number;
	jsonrpc: string;
	method: 'POST' | 'GET';
	params: TEmailBodyParams;
};

type TEmailBodyParams = {
	email: string;
	last_name: string;
	first_name: string;
};

export async function POST(req: Request) {
	try {
		const { params }: TEmailBody = await req.json();

		console.log('Received data:', params);

		const html = await render(Email({ text: 'awdawd' }));

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: params.email,
			subject: 'Your Message',
			html: html,
		});

		return NextResponse.json({
			success: true,
			message: 'Email sent successfully',
		});
	} catch (error) {
		console.error('Error processing request:', error);
		return NextResponse.json(
			{ success: false, error: 'Failed to process request' },
			{ status: 500 }
		);
	}
}
