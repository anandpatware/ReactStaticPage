import React from "react";
import "./project.css"; // Import your external CSS file
import Card from "./Card";
import Bargraph from "./Bargraph";
import Customer from "./Customer";
import Productsell from "./ProductSell";
import Projectleft from "./Projectleft";
import { PiHandWaving } from "react-icons/pi";
import {
  FcAssistant,
  FcSearch,
  FcLike,
  FcLock,
  FcViewDetails,
} from "react-icons/fc";

function App() {
  return (
    <>
      <div className="app-container">
        <Projectleft />
        <div className="right-section">
          <div className="nav-top">
            <h3 className="name" style={{ display: "flex" }}>
              Hello ShahRukh
              <PiHandWaving />
            </h3>
            <input
              type="text"
              className="search-input"
              placeholder="&#61442; Search...."
            />
          </div>
          <div className="middle">
            <Card icon={<FcAssistant />} type="Income" amount="$139.33" />
            <Card icon={<FcLike />} type="Orders" amount="$38.23k" />
            <Card icon={<FcViewDetails />} type="Balance" amount="$32k" />
            <Card icon={<FcLock />} type="Total Sales" amount="$43.33k" />
          </div>
          <div className="middle1">
            <Bargraph />
            <Customer />
          </div>
          <Productsell />
        </div>
      </div>
    </>
  );
}

export default App;
