import crypto from 'crypto';

export async function POST(req: Request) {
	// Получаем данные из тела запроса
	const formData = await req.formData();

	// Извлекаем параметры из данных формы
	const outSum = formData.get('OutSum')?.toString();
	const invId = formData.get('InvId')?.toString();
	const signatureValue = formData.get('SignatureValue')?.toString();

	// Параметры для проверки подписи
	const merchantLogin = 'chelwolrus'; // Логин Робокассы
	const merchantPass2 = 'KA8I23IzWY3PQfrYvqJ3'; // Второй пароль из настроек Робокассы

	// Генерация подписи для проверки
	const correctSignature = crypto
		.createHash('md5')
		.update(`${outSum}:${invId}:${merchantPass2}`)
		.digest('hex');

	// Проверка подписи
	if (correctSignature === signatureValue) {
		// Подпись верна — процессируем платеж
		console.log(`Платеж прошел успешно! ID заказа: ${invId}, сумма: ${outSum}`);

		// Возвращаем ответ в формате "OK<номер заказа>"
		return new Response(`OK${invId}`, { status: 200 });
	} else {
		// Подпись неверна — возможная ошибка
		console.log(`Ошибка: неверная подпись для заказа с ID: ${invId}`);

		// Возвращаем ошибку
		return new Response('Invalid signature', { status: 400 });
	}
}
