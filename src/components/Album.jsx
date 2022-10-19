import React from "react";
import "./album.scss";
import data from "../helpers/data.js";
import Card from "./Card";
const Album = () => {
  return (
    <div className="albumDiv">
      {data.map((item) => {
        const { photographer, src } = item;
        return (
          <div>
            <Card name={photographer} img={src} />
          </div>
        );
      })}
    </div>
  );
};

export default Album;
