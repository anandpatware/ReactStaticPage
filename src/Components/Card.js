import React from "react";
import { FcAssistant } from "react-icons/fc";
import "./card.css"; // Import your CSS file with styles

function Card(props) {
  const icon = props.icon;
  console.log(icon);
  return (
    <div
      className="card-container"
      style={{
        width: "100%",
        heigth: "200px",
        display: "flex",
        gap: "0px",
        borderRadius: "15px",
        boxShadow: "0px 0px 15px gray",
        backgroundColor: "white",
      }}
    >
      <div
        className="left-section"
        style={{
          width: "40%",

          height: "200px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <div className="icon" style={{ fontSize: "130px" }}>
          {icon}
        </div>
      </div>
      <div
        className="right-section"
        style={{
          width: "60%",
          backgroundColor: "white",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          margin: "0px",
          gap: "0px",
          borderRadius: "15px",
        }}
      >
        <p style={{ color: "gray" }}>{props.type}</p>
        <h3 style={{ fontWeight: "bold" }}>{props.amount}</h3>
        <p>38.5% this month</p>
      </div>
    </div>
  );
}

export default Card;
