import { NextResponse } from 'next/server';

// Allowed recruiter passcodes (normalized to lowercase for comparison)
const VALID_PASSCODES = new Set([
  'peekaboo',
  'takealook',
  'knockknock',
  'guesswhat',
  'justme'
]);

export async function POST(request) {
  try {
    const body = await request.json();
    const rawCode = (body?.passcode || '').toString().trim().toLowerCase();

    if (!rawCode) {
      return NextResponse.json(
        { success: false, message: 'Please provide a passcode.' },
        { status: 400 }
      );
    }

    if (VALID_PASSCODES.has(rawCode)) {
      return NextResponse.json({
        success: true,
        message: 'Access verified.',
        expiresIn: 'session'
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid passcode. Please request access from Priyanjli.' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal verification error.' },
      { status: 500 }
    );
  }
}
