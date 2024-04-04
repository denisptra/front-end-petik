import React from "react";
import { useEffect, useState } from "react";
import { getDetailMovie } from "../../Api.js";
import { useParams } from "react-router-dom";

function Detail () {
  let { id } = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDetailMovie(id).then((result) => {
      setDatas(result);
    });
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Detail Movie</h1>
      <div className="movie-container1">
        <Detail
          title={datas.title}
          poster={datas.poster_path}
          overview={datas.overview}
        />
      </div>
    </div>
  );
}

export default Detail;