import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    code: string;
    description: string;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String, required: true }
});

export default mongoose.model<IBook>('Book', BookSchema);
