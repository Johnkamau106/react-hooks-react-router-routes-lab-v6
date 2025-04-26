import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  const movie = {
    1: { title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
    2: { title: "Trolls", time: 93, genres: ["Animation", "Adventure", "Comedy"] },
    3: { title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Thriller"] },
  }[id];

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
