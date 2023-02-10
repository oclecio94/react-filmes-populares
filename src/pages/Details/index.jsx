import { useParams, Link } from "react-router-dom";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export default function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const APIkey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imagePath}${poster_path}`,
          releaseDate: release_date,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data de lançamento: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
