import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import MovieId from './movieId'
import { moviesMock } from '../api/mocks'

const routes = [
  {
    path: '/:movieId',
    element: <MovieId />,
    loader: () => ({ movie: moviesMock[0] })
  },
]

const router = createMemoryRouter(routes, { initialEntries: ['/:movieId'] })

describe('Movie details route', () => {
  it('renders movie details', () => {
    render(<RouterProvider router={router} />)
    // shows in breadcrumbs and title
    expect(screen.getAllByText(/lotr 1/i)).toHaveLength(2)

    expect(screen.getByText(/academy awards and nominations/i)).toBeDefined()
    expect(screen.getByText(/12/i)).toBeDefined()
    expect(screen.getByText(/budget and revenue/i)).toBeDefined()
  })
})