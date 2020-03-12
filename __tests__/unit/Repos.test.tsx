import * as React from 'react'
import { render, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Repos from '../../components/Repos'

describe('Component: Repos', () => {
  it('should render user repositories', async () => {
    const { container } = render(<Repos login='rafaelcalhau' />)

    expect(container.querySelectorAll('h3').length).toBe(1)
    expect(container.querySelector('span')?.textContent).toBe('Loading...')

    await waitForDomChange({ container })
      .then(() => null)
      .catch(err => console.log(`Error you need to deal with: ${err}`))

    const numOfRepos = container.querySelectorAll('.repo').length

    expect(numOfRepos).toBeGreaterThan(0)
    expect(container.querySelector('h3')?.textContent).toBe(`Public Projects (${numOfRepos})`)
  })
})