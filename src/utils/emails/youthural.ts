import nodemailer from 'nodemailer';

export async function sendPaymentSuccessYouthuralEmail(
  email: string,
  name: string,
) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Или другой почтовый сервис
      auth: {
        user: process.env.EMAIL_USER, // Ваш email
        pass: process.env.EMAIL_PASS, // Пароль приложения (Gmail) или API-ключ
      },
    });

    const emailContent = `
    <h1>Здравствуйте, <strong>${name}</strong>!</h1>
  
    <p>Спасибо за регистрацию на мероприятие: <strong>ЮсУрал 26</strong>.</p>
  
    <p>Вы можете узнать больше о мероприятии по ссылке:</p>
    <p>
      <a href='https://vk.com/youthural.conf' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в сообщество
      </a>
    </p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    // Опции письма
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Регистрация на ЮсУрал 26`,
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

export async function sendPaymentErrorYouthuralEmail(
  email: string,
  name: string,
) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Или другой почтовый сервис
      auth: {
        user: process.env.EMAIL_USER, // Ваш email
        pass: process.env.EMAIL_PASS, // Пароль приложения (Gmail) или API-ключ
      },
    });

    const emailContent = `
    <h1>Здравствуйте, <strong>${name}</strong>!</h1>
  
    <p>Кажется что-то пошло не так во время регистрации на мероприятие ЮсУрал 26</p>
  
    <p>Пожалуйста напишите нам и мы ответим на все ваши вопросы.</p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Регистрация на ЮсУрал 26`,
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
