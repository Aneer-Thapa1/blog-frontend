
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      description: 'Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.',
      image: 'https://source.unsplash.com/800x600/?react',
    },
    {
      id: 2,
      title: 'Building a RESTful API with Node.js and Express',
      description: 'A step-by-step guide to creating a RESTful API using Node.js and Express.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.',
      image: 'https://source.unsplash.com/800x600/?node',
    },
    {
      id: 3,
      title: 'CSS Flexbox and Grid Layouts',
      description: 'Master the art of layout design with CSS Flexbox and Grid.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.',
      image: 'https://source.unsplash.com/800x600/?css',
    },
    {
      id: 4,
      title: 'Getting Started with Python Web Development',
      description: 'Explore the world of web development with Python and popular frameworks.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.',
      image: 'https://source.unsplash.com/800x600/?python',
    },
    {
      id: 5,
      title: 'Responsive Design Techniques for Modern Websites',
      description: 'Learn effective strategies to create responsive and mobile-friendly websites.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.',
      image: 'https://source.unsplash.com/800x600/?responsive',
    },
  ]
  return (
    <div className="home">
    <div className="posts">
      {posts.map(post =>(
          <div className="post" key={post.id}>
          <div className="post-img">
          <img src={post.image} alt="" />
          </div>
              <div className="post-info">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <Link to={`/single/${post.id}`} ><button className='home-seemore'>Read More</button></Link>
              </div>
             
              
              
          </div>
      ))}
    </div>
    </div>
  )
}

export default Home