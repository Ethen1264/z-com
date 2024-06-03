import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('api/login', () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: '제로초',
        id: 'zerozho',
        image: '/5Udwvqim/jpg',
      },
      {
        headers: {
          'Set-cookie': 'connect.sid=msw-cookie;HttpOnly;path=/',
        },
      }
    );
  }),
  http.post('api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-cookie': 'connect.sid=;HttpOnly;path=/;Max-Age=0',
      },
    });
  }),
];
