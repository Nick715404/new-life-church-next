// utils/session.ts
import { sendDataToBusiness } from '@/api/register';
import { NextResponse } from 'next/server';

let sessionData: Record<string, any> = {}; // Пример сессии в памяти

// Функция для сохранения данных в сессию
export async function setSessionData(sessionId: string, data: any) {
	sessionData[sessionId] = data;
}

// Функция для получения данных из сессии
export async function getSessionData(sessionId: string) {
	return sessionData[sessionId];
}

export function eventSwitcher(data: any) {
	if (data.eventType === 'business') {
		return sendDataToBusiness(data);
	}
	if (data.eventType === 'youtural') {
	}
}
