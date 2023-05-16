import React from "react";

function Livre(props) {
  return (
    <div id={props.id} className="book-rectangle">
      <img src={props.image} alt="book Poster" className="img1"></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={props.onClick}>Read Now</button>
      <br></br>
      <button onClick={props.onDelete}>Remove Book</button>
    </div>
  );
}

export default Livre;
