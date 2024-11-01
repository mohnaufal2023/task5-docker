import { Request, Response } from 'express';
import Book from '../models/book';

export const createBook = async (req: Request, res: Response) => {
    // ... Tambah buku baru, tangani error jika judul atau kode duplikat
};

export const getBooks = async (req: Request, res: Response) => {
    // ... Mendapatkan semua buku
};

export const getBookById = async (req: Request, res: Response) => {
    // ... Mendapatkan buku berdasarkan ID
};

export const updateBook = async (req: Request, res: Response) => {
    // ... Memperbarui buku berdasarkan ID
};

export const deleteBook = async (req: Request, res: Response) => {
    // ... Menghapus buku berdasarkan ID
};
