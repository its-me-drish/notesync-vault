import request from 'supertest';
import app from '../index.js';

describe('notes', () => {
  it('requires authentication', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.status).toBe(401);
  });

  it('rejects an invalid token', async () => {
    const res = await request(app).get('/api/notes').set('Authorization', 'Bearer nope');
    expect(res.status).toBe(401);
  });
});
