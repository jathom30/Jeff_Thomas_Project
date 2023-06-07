import { useLoaderData } from 'react-router-dom'
import { getMovieDetails } from '../api'
import { Movie } from '../api/types'
import './movieId.css'
import { Breadcrumbs, FlexBox, GridBox } from '../components'
import { convertMinToHour, getTomatoIcon } from '../utils'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const { movieId } = params
  if (!movieId) {
    throw new Error('Movie not found')
  }
  const movie = await getMovieDetails(movieId)
  return { movie }
}

export default function MovieId() {
  const { movie } = useLoaderData() as { movie: Movie }
  return (
    <>
      <Breadcrumbs crumbs={[
        { to: '/movies', label: 'Movies' },
        { to: '', label: movie.name },
      ]} />
      <div className='MovieId'>
        <FlexBox flexDirection="column" gap="2rem">
          <FlexBox flexDirection='column'>
            <h1>{movie.name}</h1>
            <FlexBox alignItems="center" gap='.5rem'>
              <img className='MovieId__tomato-icon' src={getTomatoIcon(movie.rottenTomatoesScore)} />
              <p className="MovieId__title">{movie.rottenTomatoesScore}%</p>
              <p>{convertMinToHour(movie.runtimeInMinutes)}</p>
            </FlexBox>
          </FlexBox>

          <FlexBox flexDirection="column" gap='.5rem'>
            <h3>Academy awards and nominations</h3>
            <div className='MovieId__section'>
              <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap='1rem'>
                <p><span className='MovieId__bold'>{movie.academyAwardNominations}</span> Nominations</p>
                <p><span className='MovieId__bold'>{movie.academyAwardWins}</span> Awards</p>
              </GridBox>
            </div>
            <p className='MovieId__right-align'>{Math.round(movie.academyAwardWins / movie.academyAwardNominations * 100)}% Win rate</p>
          </FlexBox>

          <FlexBox flexDirection="column" gap='.5rem'>
            <h3>Budget and Revenue</h3>
            <div className="MovieId__section">
              <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap='1rem'>
                <p><span className='MovieId__bold'>${movie.budgetInMillions}MM</span> Budget</p>
                <p><span className='MovieId__bold'>${movie.boxOfficeRevenueInMillions}MM</span> Revenue</p>
              </GridBox>
            </div>
            <p className='MovieId__right-align'>${movie.boxOfficeRevenueInMillions - movie.budgetInMillions}MM Profit</p>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  )
}