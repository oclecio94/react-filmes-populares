import { useState, useEffect } from "react";
import { Container, Movies, Movie } from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const APIkey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Filmes Populares</h1>
      <Movies>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/detalhes/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>

              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </Movies>
    </Container>
  );
}
