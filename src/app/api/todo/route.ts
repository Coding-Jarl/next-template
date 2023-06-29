import { NextResponse } from 'next/server'

const tasks = [
  {
    id: 1,
    label: 'Start this app',
    status: 'done',
  },
  {
    id: 2,
    label: 'Enhance this app',
    status: 'todo',
  },
]

export async function GET() {
  return NextResponse.json(tasks)
}
