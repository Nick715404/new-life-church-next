import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	try {
		const body = await req.clone().json();
		const { email, name, eventType } = body;

		const eventName: Record<string, string> = {
			youthural: 'ЮсУрал25',
			business: 'Конференция Бизнесменов',
		};

		const eventLinks: Record<string, string> = {
			youthural: '#',
			business: 'https://t.me/predprinimateli_urala',
		};

		if (!email || !eventType || !name) {
			return NextResponse.json({
				success: false,
				message: 'Отсутствуют обязательные параметры',
			});
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail', // Или другой почтовый сервис
			auth: {
				user: process.env.EMAIL_USER, // Ваш email
				pass: process.env.EMAIL_PASS, // Пароль приложения (Gmail) или API-ключ
			},
		});

		// Формируем динамический текст письма
		const emailContent = `
    <h1>Здравствуйте, <strong>${name}</strong>!</h1>
  
    <p>Спасибо за регистрацию на мероприятие: <strong>${eventName[eventType]}</strong>.</p>
  
    <p>Вы можете узнать больше о мероприятии по ссылке:</p>
    <p>
      <a href='${eventLinks[eventType]}' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в сообщество
      </a>
    </p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

		// Опции письма
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject: `Регистрация на ${eventName[eventType]}`,
			html: emailContent,
		};

		// Отправляем письмо
		await transporter.sendMail(mailOptions);

		return NextResponse.json({
			success: true,
			message: `Письмо отправлено на ${email}`,
		});
	} catch (error) {
		console.error('Ошибка отправки письма:', error);
		return NextResponse.json({
			success: false,
			message: 'Ошибка отправки письма',
		});
	}
}
