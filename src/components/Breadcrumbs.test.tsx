import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Breadcrumbs', () => {
  it('renders crumbs', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs crumbs={[{ label: "First", to: '/' }, { label: 'Second', to: '/' }]} />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { hidden: true, name: /first/i })).toBeDefined()
    expect(screen.getByRole('link', { hidden: true, name: /second/i })).toBeDefined()
  })
})