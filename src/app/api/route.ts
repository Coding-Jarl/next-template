import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Welcome on our root endpoint',
    status: 200,
  })
}
