import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      description:
        "Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.",
      image: "https://source.unsplash.com/800x600/?react",
    },
    {
      id: 2,
      title: "Building a RESTful API with Node.js and Express",
      description:
        "A step-by-step guide to creating a RESTful API using Node.js and Express.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.",
      image: "https://source.unsplash.com/800x600/?node",
    },
    {
      id: 3,
      title: "CSS Flexbox and Grid Layouts",
      description:
        "Master the art of layout design with CSS Flexbox and Grid.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.",
      image: "https://source.unsplash.com/800x600/?css",
    },
    {
      id: 4,
      title: "Getting Started with Python Web Development",
      description:
        "Explore the world of web development with Python and popular frameworks.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.",
      image: "https://source.unsplash.com/800x600/?python",
    },
    {
      id: 5,
      title: "Responsive Design Techniques for Modern Websites",
      description:
        "Learn effective strategies to create responsive and mobile-friendly websites.Learn the basics of React Hooks and how to use them in your projects.Learn the basics of React Hooks and how to use them in your projects.",
      image: "https://source.unsplash.com/800x600/?responsive",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="menu-post" key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt="" />
          <Link to="/">
            <button className="menu-btn">See More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
