import Link from 'next/link'
import { useEffect, useState } from 'react'
import api from '../services/api'
import { Dev, Layout } from '../components'

const NavLink = ({ direction, path }) => {
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

export default function Index ({ devs, next, currentSince }) {
  const [sinceList, setSinceToList] = useState([])

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

Index.getInitialProps = async function (context) {
  const { since } = context.query
  const { headers, data } = await api.get(`/api/users${since ? '?since=' + since : ''}`)
  const link = headers.link.split(',')
  const linkNext = link[0].split(';')[0].replace(/(>|<)/g, '')
  const next = linkNext.replace('https://api.github.com/users?since=', '')

  const devs = data.map(dev => ({
    id: dev.id,
    login: dev.login,
    avatar: dev.avatar_url
  }))

  return { devs, next, currentSince: parseInt(since) || 0 }
}
