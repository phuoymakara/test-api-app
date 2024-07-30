import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
  thumbnail: string;
  author: mongoose.Schema.Types.ObjectId;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumbnail: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
