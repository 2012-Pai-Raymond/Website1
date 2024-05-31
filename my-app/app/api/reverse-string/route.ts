import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();
    console.log('Received input:', input); // Log the input received

    if (typeof input === 'string') {
      const reversedString = input.split('').reverse().join('');
      return NextResponse.json({ reversedString });
    } else {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error occurred:', error); // Log the error
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}