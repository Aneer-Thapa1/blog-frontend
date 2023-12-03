import "./single.css";

import edit from "../image/edit.png"
import remove from "../image/delete.png"
import { Link } from 'react-router-dom';
import Menu from "./Menu";

const Single = () => {
  
  return (
    <div className="single">
      <div className="content">
        <img src="https://source.unsplash.com/800x600/?responsive" alt="" />
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
            alt=""
          />
          <div className="user-info">
            <h1>John Doe</h1>
            <p>1 day ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}><img src={edit} alt=""  /></Link>
            
            <img src={remove} alt=""  />
          </div>
        </div>
        <p>
        React Hooks have transformed the landscape of React development by offering a paradigm shift in how state and lifecycle features are handled in functional components. Introduced in React version 16.8, Hooks provide a way to use stateful logic in functional components without the need for class components. They bring a new level of simplicity and reusability to React code, making it more concise and expressive.

In the world of React, class components were traditionally the go-to for managing state and lifecycle methods. However, the introduction of Hooks has opened the door for functional components to fully embrace these features. <br />
<br />The key Hooks, such as useState and useEffect, enable developers to encapsulate and manage component logic more intuitively.

Simplify State Management with useState

One of the fundamental Hooks, useState, addresses the management of state in functional components. With just a line of code, you can declare a state variable and a function to update it. This simplicity not only reduces boilerplate code but also enhances the readability of your components.
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
