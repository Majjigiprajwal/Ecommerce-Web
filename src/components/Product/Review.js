import React from "react";

function Review({ star, css }) {
  const emptyStar = 5 - star;
  const starArray = new Array(star).fill(true);
  const emptyArray = new Array(emptyStar).fill(true);
  return (
    <div className={`d-flex gap-1 text-warning ${css}`}>
      {starArray.map(() => {
        return <i className="bi bi-star-fill" key={Math.random()}></i>;
      })}
      {emptyArray.map(() => {
        return <i className="bi bi-star" key={Math.random()}></i>;
      })}
    </div>
  );
}

export default Review;
