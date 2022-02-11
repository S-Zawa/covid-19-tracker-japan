import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
