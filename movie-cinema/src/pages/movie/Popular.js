import React from "react";
import { useState, useEffect } from "react";
import { getMovieList } from "../../Api.js";
import Movie from "../../component/Movie/Movie.js";

const Popular = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Movie Popular</h1>
      <div className="movie-container" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
        {datas.map((data) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;