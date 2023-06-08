import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Movies from './movies'
import { moviesMock } from '../api/mocks'

const routes = [
  {
    path: '/',
    element: <Movies />,
    loader: () => ({ movies: moviesMock })
  },
]

const router = createMemoryRouter(routes, { initialEntries: ['/'] })

describe('Movies route', () => {
  it('renders list', () => {
    render(
      <RouterProvider router={router} />
    )
    expect(screen.getByText(/lord of the rings movies/i)).toBeDefined()
    const movieLink = screen.getByRole('link', { hidden: true, name: /lotr 1/i })
    expect(movieLink).toBeDefined()

  })
})