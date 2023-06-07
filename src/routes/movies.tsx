import { useLoaderData } from 'react-router-dom'
import { getMovies } from '../api'
import { Movie } from '../api/types'
import { FlexBox, Link, ListContainer } from '../components'
import { getTomatoIcon } from '../utils'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const movies = await getMovies()
  return { movies }
}

export default function Movies() {
  const { movies } = useLoaderData() as { movies: Movie[] }

  return (
    <ListContainer title="Lord of the Rings Movies">
      <ListContainer.Body>
        {movies.map(movie => (
          <Link key={movie._id} to={`/movies/${movie._id}`}>
            <MovieLink key={movie._id} movie={movie} />
          </Link>
        ))}
      </ListContainer.Body>
    </ListContainer>
  )
}

const MovieLink = ({ movie }: { movie: Movie }) => {
  return (
    <div className='item-container'>
      <FlexBox alignItems="center" gap='.5rem'>
        <img src={getTomatoIcon(movie.rottenTomatoesScore)} />
        <p className="item-container__title">{movie.rottenTomatoesScore}%</p>
      </FlexBox>
      <h3>{movie.name}</h3>
    </div>
  )
}