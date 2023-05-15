import React, { useState } from 'react';
import book1 from "../assessts/book1.png";
import book2 from "../assessts/book2.png";
import book3 from "../assessts/book3.png";
import upload from "../assessts/upload.png";

const Extarct = () => {
  const [items, setItems] = useState([]);


  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    const newItem = {
      id: new Date().getTime(),
      content: <div id="OUR LAST SUMMER" >
      <img src={book1} alt="book Poster" class="img1"></img>
      <h3>OUR LAST SUMMER ON TWO PARTS</h3>
      <p>book Description</p>
      <button>Read Now</button><br></br>
  </div>
    };
    setItems([...items, newItem]);
  };

  

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <div className="book-container">
        {items.map(item => (
          <div key={item.id} className="book-rectangle">
            {item.content}
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extarct;
