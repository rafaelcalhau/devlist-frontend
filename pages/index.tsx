import { useEffect, useState, ReactElement, FunctionComponentElement } from 'react'
import Link from 'next/link'
import api from '../services/api'
import { Dev, Layout } from '../components'
import { DevApiData, NavLinkProps, IndexProps } from '../types'

const NavLink = ({ direction, path }: NavLinkProps): ReactElement => {
  return (
    <>
      <Link href={path}>
        <a>
          <i className={`arrow alternate circle ${direction} icon`} />
        </a>
      </Link>

      <style jsx>
        {`
          a {
            color: #999;
            font-size: 3em;
            text-decoration: none;
            transition: .2s
          }

          a:hover {
            color: #444;
          }
        `}
      </style>
    </>
  )
}

export default function Index ({ devs, next, currentSince = 0 }: IndexProps): FunctionComponentElement<IndexProps> {
  const [sinceList, setSinceToList] = useState<number[]>([])

  function hasBack () {
    const currentSinceIndex = sinceList.indexOf(currentSince)

    if (sinceList.length) {
      if (currentSinceIndex > 0) {
        const previous = sinceList[currentSinceIndex - 1]

        if (previous > 0) {
          return <NavLink direction='left' path={`/?since=${previous}`} />
        }
      } else {
        return <NavLink direction='left' path='/' />
      }
    }

    return null
  }

  useEffect(() => {
    const sinceIndex = sinceList.indexOf(currentSince)

    if (currentSince > 0) {
      if (sinceIndex === -1) {
        setSinceToList(currentList => [...currentList, currentSince])
      }
    } else {
      setSinceToList([])
    }
  }, [currentSince, setSinceToList])

  return (
    <Layout>
      <div className='center'>
        {
          devs.map(props => <Dev key={props.id} {...props} />)
        }
      </div>

      <footer>
        {hasBack()}
        <NavLink direction='right' path={`/?since=${next}`} />
      </footer>

      <style jsx>
        {`
          .center {
            text-align: center
          }

          footer {
            padding: 20px 0;
            text-align: center
          }
        `}
      </style>
    </Layout>
  )
}

Index.getInitialProps = async function ({ query }: any) {
  const since = query.since || 0
  const { headers, data } = await api.get(`/api/users${since ? '?since=' + since : ''}`)
  const link = headers.link.split(',')
  const linkNext = link[0].split(';')[0].replace(/(>|<)/g, '')
  const next = linkNext.replace('https://api.github.com/users?since=', '')

  const devs = data.map((dev: DevApiData) => ({
    id: dev.id,
    login: dev.login,
    avatar: dev.avatar_url
  }))

  return { devs, next, currentSince: parseInt(since) }
}
