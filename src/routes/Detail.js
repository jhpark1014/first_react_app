import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

function Detail() {
  // console.log(id);
  const { id } = useParams();
  const getMovie = async () => {
    const json =
      await // await has to be inside an async function -> getMovie function을 만들어 async로 만들어줌
      (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    console.log(json);
    setMovie(json.data.movie);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const [movie, setMovie] = useState([]);
  return (
    <div>
      <img src={movie.medium_cover_image}></img>
      <h2>{movie.title_long}</h2>
      <div>Rating: {movie.rating}</div>
      <div>Runtime: {movie.runtime}</div>
      <br></br>
      {movie.description_full}
    </div>
  );
}

export default Detail;
