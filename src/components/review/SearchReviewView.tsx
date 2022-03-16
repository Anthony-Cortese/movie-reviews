import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import "./SearchReviewView.css";

function SearchReviewView() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  const MOVIE_API_URL = `https://www.omdbapi.com/?s=${query}&page=1&apikey=d2e8636`;

  const searchMovies = async (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies([jsonResponse.Search[0]]);
      });
  }, []);

  return (
    <form className="form" onSubmit={searchMovies}>
      <div className="form__group field">
        <label className="form__label" htmlFor="query"></label>
        <div className="fix">
          <input
            className="form__field"
            type="text"
            name="query"
            placeholder="Search for a film"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button className="button" type="submit">
            GO FOR FILM
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchReviewView;
