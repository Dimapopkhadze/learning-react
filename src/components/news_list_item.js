import { render } from "@testing-library/react";
import React, { Component } from "react";
import classes from "../css/styles.css";

const NewsItem = ({ item }) => {
  return (
    <div>
      <div className={classes.news_item}>
        <h3>{item.title}</h3>
        <div>{item.feed}</div>
      </div>
    </div>
  );
};
export default NewsItem;

/*  */
