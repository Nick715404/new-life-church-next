'use server';

import { NextResponse } from 'next/server';

export async function POST(req: any) {
	const body = await req.json();
	console.log('Received data:', body);
}
