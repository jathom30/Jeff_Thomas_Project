import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Movies from './movies'
import { moviesMock } from '../api/mocks'
import Root from './root'

const router = createMemoryRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: 'movies',
    element: <Movies />,
    loader: () => moviesMock
  }]
}], { initialEntries: ['movies'] })

describe('Movies route', () => {
  it('renders list', () => {
    render(<RouterProvider router={router} />)
    expect(screen.getByText(/lord of the rings movies/i)).toBeDefined()
  })
})