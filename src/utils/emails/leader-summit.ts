import nodemailer from 'nodemailer';

export async function sendPaymentSuccessLeaderSummitEmail(
  email: string,
  name: string,
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
  
    <p>Спасибо за регистрацию на мероприятие: <strong>ЮС Магнитагорск 25</strong>.</p>
  
    <p>Вы можете узнать больше о мероприятии по ссылке:</p>
    <p>
      <a href='https://vk.com/youthmgn.conf' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в группу ВК
      </a>
    </p>
    <p>
       <a href='https://t.me/youthmgn_conf' target="_blank" style="color: #007bff; text-decoration: none;">
        Перейти в телеграм
      </a>
    </p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Регистрация на ЮС Магнитагорск 25`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error while send email to youthural');
    }
  }
}

export async function sendPaymentErrorLeaderSummitEmail(
  email: string,
  name: string,
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
  
    <p>Кажется что-то пошло не так во время регистрации на мероприятие ЮС Магнитагорск  25</p>
  
    <p>Пожалуйста напишите нам и мы ответим на все ваши вопросы.</p>
  
    <p>С уважением,<br>Команда организаторов</p>
  `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Регистрация на ЮсУрал 25`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error while send email to youthural');
    }
  }
}
