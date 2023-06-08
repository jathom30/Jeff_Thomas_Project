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
import Home from './routes/index.tsx';
import Quotes, { loader as quotesLoader } from './routes/quotes.tsx';
import QuoteId, { loader as quoteDetailsLoader } from './routes/quoteId.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'movies',
        element: <Movies />,
        errorElement: <ErrorPage />,
        loader: movieLoader,
      },
      {
        path: 'movies/:movieId',
        element: <MovieId />,
        errorElement: <ErrorPage />,
        loader: movieDetailsLoader
      },
      {
        path: 'characters',
        element: <Characters />,
        errorElement: <ErrorPage />,
        loader: charactersLoader,
      },
      {
        path: 'characters/:characterId',
        element: <CharacterId />,
        errorElement: <ErrorPage />,
        loader: characterDetailsLoader
      },
      {
        path: 'quotes',
        element: <Quotes />,
        errorElement: <ErrorPage />,
        loader: quotesLoader
      },
      {
        path: 'quotes/:quoteId',
        element: <QuoteId />,
        errorElement: <ErrorPage />,
        loader: quoteDetailsLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
