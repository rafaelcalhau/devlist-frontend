import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Repo from '../../components/Repos/Repo'

describe('Component: Repo', () => {
  it('should render a repository', async () => {
    const data = {
      id: 1,
      name: 'MyAwesomeApp',
      description: 'Something I have made for Devs.',
      url: 'https://myawesomeapp.url'
    }
    const { container } = render(<Repo data={data} />)

    expect(container.querySelectorAll('.repo').length).toBe(1)
    expect(container.querySelector('.repo')?.childElementCount).toBe(2)
    expect(container.querySelectorAll('.repo .one').length).toBe(1)
    expect(container.querySelectorAll('.repo .one i.trophy.icon').length).toBe(1)
    expect(container.querySelectorAll('.repo .two').length).toBe(1)
    expect(container.querySelectorAll('.repo .two a').length).toBe(1)
    expect(container.querySelectorAll('.repo .two small').length).toBe(1)

    // Repo informations
    expect(container.querySelector('.repo .two a')?.textContent).toBe(`${data.name} (${data.id})`)
    expect(container.querySelector('.repo .two small')?.textContent).toBe(`${data.description}`)
  })
})