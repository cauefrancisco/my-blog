import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateArticle = () => {
  const [value, setValue] = useState('');
  const category = [
    {
      id: 1,
      name: "tech",
    },
    {
      id: 2,
      name: "culture",
    },
    {
      id: 3,
      name: "food",
    },
  ];

  // const [categories, setCategories] = useState([]);

  // const addCategory = (name) => {
  //   categories = category;

  //   if(!categories.hasOwnProperty(name)){
  //     setCategories(categories.push(name));
  //   }
  // };

  return (
    <div className='addArticle'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
         <ReactQuill theme="snow"  value={value} onChange={setValue} className="quill" />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b> Satatus: </b> Draft 
          </span>
          <span>
            <b> Visibility: </b> Public 
          </span>
          <label htmlFor="file" >Upload image</label>
          <input type="file" id='file' style={{display:'none'}}/>
          <div className="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {category.map((cat) =>(
            <>
            <input key={cat.id} type="checkbox" name='category' value={cat.name} />
            <label htmlFor='categories'>{cat.name}</label>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreateArticle;