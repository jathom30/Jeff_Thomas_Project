import { describe, expect, it, vitest } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Pagination', () => {
  it('renders select and buttons', () => {
    const limitChangeMock = vitest.fn()
    const pageChangeMock = vitest.fn()
    render(
      <MemoryRouter>
        <Pagination
          page='1'
          limit='10'
          onLimitChange={limitChangeMock}
          onPageChange={pageChangeMock}
        />
      </MemoryRouter>
    )

    const prevBtn = screen.getByRole('button', { hidden: true, name: /previous/i })
    const nextBtn = screen.getByRole('button', { hidden: true, name: /next/i })
    expect(prevBtn).toBeDefined()
    expect(prevBtn).toBeDisabled()
    expect(nextBtn).toBeDefined()
    // prev btn is disabled, will not make call
    fireEvent.click(prevBtn)
    fireEvent.click(nextBtn)
    expect(pageChangeMock).toHaveBeenCalledTimes(1)
  })
})