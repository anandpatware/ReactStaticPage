import { useState } from "react";

function Display() {
  const [name, setName] = useState("enter the name");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault(); //this will avoid refresing page after submit
          alert(name);
        }}
        action=""
        style={{
          backgroundColor: "crimson",
          margin: "30px",
          border: "5px solid green",
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            padding: "20px",
            fontFamily: "cursive",
          }}
        >
          {name}
        </h1>
        <input
          style={{
            fontSize: "30px",
            padding: "20px",
            margin: "30px",
            boxShadow: "10px 10px  gray",
            fontFamily: "fantasy",
          }}
          type="text"
          onChange={(val) => {
            setName(val.target.value);
          }}
          value={name}
        />
        <button>click me</button>
      </form>
    </>
  );
}
export default Display;
