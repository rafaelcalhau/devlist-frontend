import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from '../../components/Layout'

describe('Component: Layout', () => {
  it('should render a layout element container', () => {
    const { container, getByText } = render(<Layout />)

    expect(container.querySelectorAll('header').length).toBe(1)
    expect(container.querySelectorAll('header span').length).toBe(1)
    expect(container.querySelector('header span')?.textContent).toBe('DevList')
    expect(getByText(/Find talents for your project!/i)).toBeInTheDocument()
    expect(container.querySelectorAll('main').length).toBe(1)
  })
})