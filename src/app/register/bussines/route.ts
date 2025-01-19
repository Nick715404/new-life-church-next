// route.ts
'use server';

import { render } from '@react-email/render';
import Email from '../../../components/emails/ui/BussinesEmail';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: '',
	port: 0,
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER, // Почта для отправки
		pass: process.env.EMAIL_PASS, // Пароль или токен для почты
	},
});

export async function POST(req: Request) {
	try {
		const { email, first_name, last_name } = await req.json();

		console.log('Received data:', {
			email,
			first_name,
			last_name,
		});

		const html = await render(Email({ text: 'awdawd' }));

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
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
