import mongoose from 'mongoose';
import { config } from 'dotenv';
import Author from './author.model';

config();

const mongoUri = process.env.DB_URI || 'mongodb://demodb:44444444@localhost:27017/test';

const seedAuthors = async () => {
  try {
    await mongoose.connect(mongoUri);
    const authors = [
      { firstName: 'John', lastName: 'Doe', books: ['Book 1', 'Book 2'] },
      { firstName: 'Jane', lastName: 'Smith', books: ['Book 3', 'Book 4'] },
      { firstName: 'Alice', lastName: 'Johnson', books: ['Book 5', 'Book 6'] },
    ];

    await Author.deleteMany({});
    await Author.insertMany(authors);
  

    console.log('Authors have been seeded');
  } catch (error) {
    console.error('Error seeding authors:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAuthors();
