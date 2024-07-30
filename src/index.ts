import express, { Express, Request, Response , Application } from 'express';
import path from 'path'
import mongoose from 'mongoose';
import {config} from 'dotenv'
import Author from './author.model';
import Post from './post.model';

config();

const app: Application = express();
const port = process.env.PORT || 4001;
//
const mongoUri = process.env.DB_URI || 'mongodb://demodb:44444444@localhost:27017/test'
export const database = mongoose;
database.connect(mongoUri)
.then(() => {
  console.log('Database connected');
})
.catch((error) => {
  console.log('Database connection error:', error);
});
//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/authors', async (req: Request, res: Response) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/posts', async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({}).populate('author');
    res.render('post', { posts });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/', (req: Request, res: Response) => {
  res.render('index',{ message: 'Welcome to Node.js App hosting on 53Cloud'});
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});