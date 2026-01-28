import nodemailer from 'nodemailer';

export async function sendPaymentSuccessRidsEmail(email: string, name: string) {
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
  
    <p>Спасибо за регистрацию на мероприятие: <strong>Конференция для детских служителей и родителей</strong>.</p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    // Опции письма
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Конференция для детских служителей и родителей`,
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

export async function sendPaymentErrorRidsEmail(email: string, name: string) {
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
  
    <p>Кажется что-то пошло не так во время регистрации на мероприятие Конференция для детских служителей и родителей</p>
  
    <p>Пожалуйста напишите нам и мы ответим на все ваши вопросы.</p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    // Опции письма
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Конференция для детских служителей и родителей`,
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
