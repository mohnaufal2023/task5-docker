// tests/book.test.ts
import request from 'supertest';
import app from '../src/app'; // sesuaikan dengan path ke aplikasi utama Anda
import mongoose from 'mongoose';

describe('Book Management API', () => {
  // Sambungkan ke database sebelum menjalankan tes
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string, { useNewUrlParser: true });
  });

  // Tutup koneksi setelah tes selesai
  afterAll(async () => {
    await mongoose.disconnect();
  });

  // Tes login endpoint
  describe('POST /login', () => {
    it('should return a session token on successful login', async () => {
      const response = await request(app).post('/login').send({
        username: 'testuser',
        password: 'password123',
      });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });
  });

  // Tes tambah buku
  describe('POST /books', () => {
    it('should add a new book when logged in', async () => {
      const token = 'example-token'; // ganti dengan token yang valid dari endpoint login

      const response = await request(app)
        .post('/books')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Book Title',
          author: 'Author Name',
          code: 'BOOK123',
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
      expect(response.body.title).toBe('Book Title');
    });
  });

  // Tambahkan pengujian untuk endpoint lain seperti GET, PUT, DELETE
});
