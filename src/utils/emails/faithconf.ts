import nodemailer from 'nodemailer';

export async function sendPaymentSuccessFaithConfEmail(
	email: string,
	name: string
) {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const emailContent = `
    <h1>Здравствуйте, <strong>${name}</strong>!</h1>
  
    <p>Спасибо за регистрацию на мероприятие: <strong>Уральская Конференция Веры</strong>.</p>
  
    <p>Вы можете узнать больше о мероприятии по ссылке:</p>
    <p>
      <a href='https://t.me/ukvchel' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в телеграм
      </a>
      <a href='https://vk.com/ukvchel' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в вк
      </a>
    </p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

		// Опции письма
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject: `Регистрация на УКВ`,
			html: emailContent,
		};

		// Отправляем письмо
		await transporter.sendMail(mailOptions);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			throw new Error('Error while send email to youthural');
		}
	}
}

export async function sendPaymentErrorFaithConfEmail(
	email: string,
	name: string
) {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const emailContent = `
    <h1>Здравствуйте, <strong>${name}</strong>!</h1>
  
    <p>Кажется что-то пошло не так во время регистрации на мероприятие Уральская Конференция Веры</p>
  
    <p>Пожалуйста напишите нам и мы ответим на все ваши вопросы.</p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

		// Опции письма
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject: `Регистрация на УКВ`,
			html: emailContent,
		};

		// Отправляем письмо
		await transporter.sendMail(mailOptions);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			throw new Error('Error while send email to youthural');
		}
	}
}
