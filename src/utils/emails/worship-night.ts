import nodemailer from 'nodemailer';

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

export async function sendPaymentSuccessWorshipNightEmail(email: string, name: string) {
  try {
    const html = `
      <h1>Здравствуйте, <strong>${name}</strong>!</h1>
      <p>Спасибо за регистрацию на <strong>Вечер Хвалы — ЮС Урал 26</strong>.</p>
      <p>Ждём тебя 7 августа в 22:00. Это будет особенная ночь поклонения!</p>
      <p>С уважением,<br>Команда организаторов</p>
    `;

    await createTransporter().sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Регистрация на Вечер Хвалы — ЮС Урал 26',
      html,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error while sending worship-night success email');
    }
  }
}

export async function sendPaymentErrorWorshipNightEmail(email: string, name: string) {
  try {
    const html = `
      <h1>Здравствуйте, <strong>${name}</strong>!</h1>
      <p>Кажется, что-то пошло не так при регистрации на Вечер Хвалы — ЮС Урал 26.</p>
      <p>Пожалуйста, напишите нам — мы поможем разобраться.</p>
      <p>С уважением,<br>Команда организаторов</p>
    `;

    await createTransporter().sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Ошибка регистрации на Вечер Хвалы — ЮС Урал 26',
      html,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error while sending worship-night error email');
    }
  }
}
