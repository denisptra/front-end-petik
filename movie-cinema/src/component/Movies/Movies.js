import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList } from "../../Api.js";

const Movies = () => {
  const [nama, setNama] = useState("ucup");

  console.log(nama);

  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      poster: "https://picsum.photos/200/300?random=8",
      title: "Amazing Spiderman",
      year: 2012,
    };
    setDatas([...datas, movie]);
    setNama("Budi");
  };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // menangkap data result api
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div className="container">
      <h1>Latest Movies</h1>
      <div class="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              id={ data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
        {/* <p>{nama}<br /></p> */}
        {/* <button onClick={handleClick}><p>Add Movie</p></button> */}
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;