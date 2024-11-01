import express from 'express';
import connectDB from './config/db';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware dan konfigurasi lainnya di sini
connectDB();

app.use('/api', bookRoutes);
app.use('/api', authRoutes);

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));
