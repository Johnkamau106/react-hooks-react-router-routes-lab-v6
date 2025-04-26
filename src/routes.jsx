import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';  // Custom error page

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*",  // Wildcard for any invalid route
    element: <ErrorPage />,  // Display the error page for invalid routes
  },
];

export default routes;
