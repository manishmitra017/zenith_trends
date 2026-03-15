import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function POST(request: NextRequest) {
  const data = await request.text();
  const filePath = join(process.cwd(), 'products_scraped.json');
  writeFileSync(filePath, data, 'utf-8');
  return NextResponse.json({ ok: true, bytes: data.length });
}
