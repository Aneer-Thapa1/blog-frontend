import "./write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editor-container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input type="file" typeof="image" id="file" />
          <label htmlFor="file"> upload image</label>

          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>category</h1>

          <div className="cat">
            <input type="radio" name="cat" id="science" value="science" />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="cinema" value="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="technology" value="technology" />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="design" value="desig" />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="" value="art" />
            <label htmlFor="art">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
