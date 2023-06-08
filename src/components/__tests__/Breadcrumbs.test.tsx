import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from '..'

describe('Breadcrumbs', () => {
  test('renders crumbs', () => {
    render(<Breadcrumbs crumbs={[{ label: "First", to: '/' }, { label: 'Second', to: '/' }]} />)
    expect(screen.getByRole('link', { hidden: true, name: /first/i })).toBeDefined()
    expect(screen.getByRole('link', { hidden: true, name: /second/i })).toBeDefined()
  })
})