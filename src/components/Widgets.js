import React from "react";
import { BsInfoCircleFill, BsFillRecordFill } from "react-icons/bs";
import "../styles/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <BsFillRecordFill size={14} />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <BsInfoCircleFill />
      </div>

      {newsArticle("Over Coming Crisis!", " Management is the key!")}
      {newsArticle("Understanding your potential!", "You've got unlimited potentials")}
      {newsArticle("principle and benefit of Change", "influence the change around you")}
      {newsArticle("Fatherhood principle", "Mr cultivator")}
    </div>
  );
}

export default Widgets;
