import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const { slug } = await params;

  const imagePath = path.join(process.cwd(), 'contents', ...slug);

  // console.log('Requested image path:', imagePath);

  if (!fs.existsSync(imagePath)) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }

  const ext = path.extname(imagePath).toLowerCase();
  const mimeType =
    ext === '.png'
      ? 'image/png'
      : ext === '.jpg' || ext === '.jpeg'
        ? 'image/jpeg'
        : ext === '.gif'
          ? 'image/gif'
          : null;

  if (!mimeType) {
    return NextResponse.json(
      { error: 'Unsupported file type' },
      { status: 400 }
    );
  }

  const imageBuffer = fs.readFileSync(imagePath);

  return new NextResponse(imageBuffer, {
    headers: {
      'Content-Type': mimeType,
    },
  });
}
