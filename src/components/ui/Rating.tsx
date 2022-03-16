import React from "react";
import s from "./Rating.module.css";

function Rating() {
  return (
    <div className={s.starrating}>
      <div className={s.bd}>
        <input type="radio" name="stars" id="star-6" />
        <label htmlFor="star-6"></label>

        <input type="radio" name="stars" id="star-5" />
        <label htmlFor="star-5"></label>

        <input type="radio" name="stars" id="star-4" />
        <label htmlFor="star-4"></label>

        <input type="radio" name="stars" id="star-3" />
        <label htmlFor="star-3"></label>

        <input type="radio" name="stars" id="star-2" />
        <label htmlFor="star-2"></label>

        <input type="radio" name="stars" id="star-1" />
        <label htmlFor="star-1"></label>
      </div>
    </div>
  );
}

export default Rating;
