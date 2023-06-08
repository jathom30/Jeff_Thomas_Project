import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './home'

describe('Home route', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByText(/the lord of the rings/i)).toBeDefined()
    expect(screen.getByRole('link', { hidden: true, name: /one api to rule them all/i })).toBeDefined()
  })
})