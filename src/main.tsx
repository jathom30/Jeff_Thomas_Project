import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './theme.css'
import './index.css'
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import Movies, { loader as movieLoader } from './routes/movies.tsx';
import MovieId, { loader as movieDetailsLoader } from './routes/movieId.tsx';
import Characters, { loader as charactersLoader } from './routes/characters.tsx';
import CharacterId, { loader as characterDetailsLoader } from './routes/characterId.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies',
        element: <Movies />,
        loader: movieLoader,
      },
      {
        path: 'movies/:movieId',
        element: <MovieId />,
        loader: movieDetailsLoader
      },
      {
        path: 'characters',
        element: <Characters />,
        loader: charactersLoader,
      },
      {
        path: 'characters/:characterId',
        element: <CharacterId />,
        loader: characterDetailsLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
