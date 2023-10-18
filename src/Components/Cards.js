import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="container">
      <h1 style={{ marginTop: "100px" }}>Welcome To Cards</h1>
      <div
        className="row"
        style={{
          marginTop: "50px",
          backgroundColor: "yellowgreen",
          padding: "150px",
        }}
      >
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeocu8_9DAARnfBZX4UO8rq9UKo-FMR9hRYA&usqp=CAU"
          }
          para=" Some quick example text to build on the card title and make up
                the bulk of the card's content."
          title="Card title"
        />
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgt27uAhO9zQZGjZ81E-fJ8VvhkRRLT9IwQ&usqp=CAU"
          }
          para=" Some quick example text to build on the card title and make up
                the bulk of the card's content."
          title="Card title"
        />

        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgt27uAhO9zQZGjZ81E-fJ8VvhkRRLT9IwQ&usqp=CAU"
          }
          para=" Some quick example text to build on the card title and make up
                the bulk of the card's content."
          title="Card title"
        />
      </div>
    </div>
  );
}

export default Cards;
