import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "Trolls" },
    { id: 3, title: "Jack Reacher: Never Go Back" },
  ];

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
}

export default Home;
