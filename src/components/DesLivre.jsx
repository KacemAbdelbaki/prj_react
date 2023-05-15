import React, { useState } from 'react';
import book1 from "../assessts/book1.png";
import book2 from "../assessts/book2.png";
import book3 from "../assessts/book3.png";
import upload from "../assessts/upload.png";

function DesLivre() {

  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);

  const update = (event) => {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setImage(imageUrl);
    document.getElementById("newimg").className="img01";
  };

  const rmDiv = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const rmDivext = (id) =>{
    const main = document.getElementById('main');
  main.removeChild(document.getElementById(id)); 
  }

  const addDiv = () => {
    const newItem = {
      id: document.getElementById("title").value,
      content: <div id="OUR LAST SUMMER" >
      <img src={image} alt="book Poster" class="img1"></img>
      <h3>{document.getElementById("title").value}</h3>
      <p>{document.getElementById("des").value}</p>
      <button>Read Now</button><br></br>
  </div>
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <div id="main" className="book-container">
        <div id="adding-div" className="add-book-rectangle">
            <label>select book poster</label>
            <input type="file" id="file" className="upload-img-input" onChange={update}></input>
            <label for="file"><img className="upload-img" src={upload} ></img></label>
            <img id="newimg" className="img0" src={image} alt="uploaded image" />
            <label><br></br>insert a title of the book</label>
            <input type="text" placeholder='Book Title' id="title"/>
            <label><br></br><br></br>insert a description of the book</label>
            <input type="text" placeholder='Book Description' id="des"/><br></br><br></br>
            <button onClick={addDiv}>Add Book</button>
        </div>
    <div id="OUR LAST SUMMER" className="book-rectangle">
        <img src={book1} alt="book Poster" class="img1"></img>
        <h3>OUR LAST SUMMER</h3>
        <p>book Description</p>
        <button>Read Now</button><br></br>
        <button onClick={() => rmDivext("OUR LAST SUMMER")}>Remove Book</button>
    </div>
    <div id="FORTRESS BLOOD" class="book-rectangle">
        <img src={book2} alt="book Poster" class="img1"></img>
        <h3>FORTRESS BLOOD</h3>
        <p>book Description</p>
        <button>Read Now</button><br></br>
        <button onClick={() => rmDivext("FORTRESS BLOOD")}>Remove Book</button>
    </div>
    <div id="THE MIND OF A LEADER" class="book-rectangle">
        <img src={book3} alt="book Poster" class="img1"></img>
        <h3>THE MIND OF A LEADER</h3>
        <p>book Description</p>
        <button>Read Now</button><br></br>
        <button onClick={() => rmDivext("THE MIND OF A LEADER")}>Remove Book</button>
    </div>
        {items.map(item => (
          <div key={item.id} className="book-rectangle">
            {item.content}
            <button onClick={() => rmDiv(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default DesLivre;