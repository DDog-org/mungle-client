import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/onboarding')) {
    return NextResponse.next();
  }

  const token = req.headers.get('Authorization')?.split(' ')[1];

  const validateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/validate`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const {
    error: { status, code },
  } = await validateResponse.json();

  if (status) {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized', code }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/estimates',
    '/estimates/:id*',
    '/groomers/estimate-form',
    '/groomers/review/:id*/edit',
    '/vets/estimate-form',
    '/vet/review/:id*/edit',
    '/reviews/:id*/form',
    '/reservations',
    '/chats',
    '/chats/:id*',
    '/payments',
    '/payments/order',
    '/payments/validate',
    '/payments/complete',
    '/mypage/user-profile',
    '/mypage/user-profile/edit',
    '/mypage/pet-profile',
    '/mypage/pet-profile/edit',
    '/mypage/pet-profile/create',
    '/mypage/reviews',
    '/mypage/favorites',
    '/mypage/payments',
    '/mypage/payments/:id*',
  ],
};
