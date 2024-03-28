import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";

const Movies = () => {  
  const [nama, setNama] = useState("ucup");

  console.log(nama);
 
  const [datas, setDatas] = useState([
    {
      title: "Judul film 1",
      year: 2004,
      genre: "Comedy",
      poster: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Judul film 2",
      year: 2004,
      genre: "Romance",
      poster: "https://picsum.photos/200/300?random=2",
    },
    {
      title: "Judul film 3",
      year: 2004,
      genre: "Action",
      poster: "https://picsum.photos/200/300?random=3",
    },
    {
      title: "Judul film 4",
      year: 2004,
      genre: "Fanntasy",
      poster: "https://picsum.photos/200/300?random=4",
    },
    {
      title: "Judul film 5",
      year: 2004,
      genre: "Anime",
      poster: "https://picsum.photos/200/300?random=5",
    },
    {
      title: "Judul film 6",
      year: 2004,
      genre: "Animasi",
      poster: "https://picsum.photos/200/300?random=6",
    },
    {
      title: "Judul film 7",
      year: 2004,
      genre: "Sci-FI",
      poster: "https://picsum.photos/200/300?random=7",
    },
  ]);

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
  console.log(datas);

  return (
    <div className="container">
      <h1>Latest Movies</h1>
      <div class="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
        <p>{nama}<br /></p>
        <button onClick={handleClick}><p>Add Movie</p></button>
      </div>
      <AddMovieForm onAddMovie={addMovie}/>
    </div>
  );
};

export default Movies;