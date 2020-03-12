import * as React from 'react'
import Link from 'next/link'
import { Dev as DevType } from '../types'

export default function Dev ({ avatar, id, login }: DevType) {
  return (
    <>
      <div className='box'>
        <Link href='/profile/[login]' as={`/profile/${login}`}>
          <a className='avatar'>
            <img src={avatar} />
          </a>
        </Link>
        <div className='info'>
          <span className='id'>{id}</span><br />
          <span className='login'>{login}</span>
        </div>
      </div>
      <style jsx>{`
        .box {
          display: inline-flex;
          flex-direction: column;
          margin: 15px;
          width: calc(20% - 30px)
        }

        .avatar {
          align-self: center;
          border-radius: 50%;
          height: 100%;
          width: 100%;
          max-width: 150px;
          max-height: 150px;
          overflow: hidden
        }

        .avatar img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
          opacity: .7;
          transition: .2s
        }

        .avatar img:hover {
          opacity: 1
        }

        .info {
          color: #999;
          font-family: Roboto;
          line-height: 20px;
          padding: 10px 0
        }

        .info span.login {
          border-radius: 3px;
          color: #333;
          display: inline-block;
          min-width: 120px;
          padding: 3px 0;
        }

        @media (max-width: 840px) {
          .box {
            width: calc(30% - 20px)
          }
        }

        @media (max-width: 530px) {
          .box {
            width: calc(40% - 30px)
          }
        }
      `}</style>
    </>
  )
}
