import mongoose, { Schema, Document } from 'mongoose';

interface IAuthor extends Document {
  firstName: string;
  lastName: string;
  books: string[];
  posts: mongoose.Schema.Types.ObjectId[];
}

const authorSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  books: { type: [String], required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const Author = mongoose.model<IAuthor>('Author', authorSchema);

export default Author;
