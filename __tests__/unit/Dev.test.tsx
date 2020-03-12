import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dev from '../../components/Dev'
import { Dev as DevType } from '../../types'

describe('Component: Dev', () => {
  it('should render a developer element container with avatar, id and login', () => {
    const props: DevType = {
      avatar: 'https://avatars2.githubusercontent.com/u/17502027?v=4',
      id: 17502027,
      login: 'rafaelcalhau'
    }

    const { container } = render(<Dev {...props} />)

    expect(container.querySelectorAll('img').length).toBe(1)
    expect(container.querySelector('img')?.getAttribute("src")).toBe(props.avatar)
    expect(container.querySelectorAll('.info .id').length).toBe(1)
    expect(container.querySelector('.info .id')?.textContent).toBe(String(props.id))
    expect(container.querySelector('.info .login')?.textContent).toBe(props.login)
  })
})