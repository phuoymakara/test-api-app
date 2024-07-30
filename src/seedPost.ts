import mongoose from 'mongoose';
import { config } from 'dotenv';
import Author from './author.model';
import Post from './post.model';

config();

const mongoUri = process.env.DB_URI || 'mongodb://demodb:44444444@localhost:27017/test';

const seedPosts = async () => {
  try {
    await mongoose.connect(mongoUri);
    const authors = await Author.find({});

    if (authors.length === 0) {
      console.log('No authors found. Please seed authors first.');
      return;
    }

    const posts = [
      {
        title: 'Post 1',
        content: 'Content of post 1',
        thumbnail: 'https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/4:3/w_7072,h_5304,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg',
        author: authors[0]._id
      },
      {
        title: 'Post 2',
        content: 'Content of post 2',
        thumbnail: 'https://images.followalice.com/1SoxETNfQR7bvEltwZ8bE7/9493946a72382e756aa01c4c100c40b7/hot-air-balloons-gcc466b113_1920.jpg?q=80&fit=fill&f=center&w=800&h=608',
        author: authors[1]._id
      },
      {
        title: 'Post 3',
        content: 'Content of post 3',
        thumbnail: 'https://static2.tripoto.com/media/filter/tst/img/OgData/1458116904_1457977545_1.jpg',
        author: authors[2]._id
      },
      {
        title: 'Post 4',
        content: 'Content of post 4',
        thumbnail: 'https://static.toiimg.com/photo/msid-92696733,width-96,height-65.cms',
        author: authors[0]._id
      },
      {
        title: 'Post 5',
        content: 'Content of post 5',
        thumbnail: '	https://static.toiimg.com/thumb/49453778/Top-adven…inations-in-the-world-1.jpg?width=1200&height=900',
        author: authors[1]._id
      },
      {
        title: 'Post 6',
        content: 'Content of post 6',
        thumbnail: 'https://images-cdn.reedsy.com/discovery/post/41/featured_image/medium_00490baf0a4dd0c8a564c7c02b21c615ce78b794.jpg',
        author: authors[2]._id
      },
      {
        title: 'Post 7',
        content: 'Content of post 7',
        thumbnail: 'https://www.avis.co.in/blog/wp-content/uploads/2018/08/featured-images-600x375.jpg',
        author: authors[0]._id
      },
      {
        title: 'Post 8',
        content: 'Content of post 8',
        thumbnail: 'https://www.avis.co.in/blog/wp-content/uploads/2018/08/Para-gliding-600x450.jpg',
        author: authors[1]._id
      },
      {
        title: 'Post 9',
        content: 'Content of post 9',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbD3KXwY5HHkZkq__rQlvrtRzj63_1IqnHQ&s',
        author: authors[2]._id
      },
      {
        title: 'Post 10',
        content: 'Content of post 10',
        thumbnail: 'https://www.norwegianadventurecompany.com/img/containers/main/img/AdobeStock_164100854.jpeg/02a97b1c847c5c1602d4b4820e02553b.webp',
        author: authors[0]._id
      },
    ];

    await Post.deleteMany({});
    await Post.insertMany(posts);

    console.log('Posts have been seeded');
  } catch (error) {
    console.error('Error seeding authors:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedPosts();
