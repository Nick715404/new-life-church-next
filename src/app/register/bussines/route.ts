'use server';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		// Читаем тело запроса
		const body = await req.json();
		console.log('Received data:', body);

		// Возвращаем успешный ответ
		return NextResponse.json({
			success: true,
			message: 'Data received successfully',
		});
	} catch (error) {
		console.error('Error processing request:', error);

		// Возвращаем ошибку
		return NextResponse.json(
			{ success: false, error: 'Failed to process request' },
			{ status: 500 }
		);
	}
}
