import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const List = () => {
  const articles = useSelector(state => state.articles, shallowEqual);

  return (
    <ul>
      {articles && articles.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
};

export default List;