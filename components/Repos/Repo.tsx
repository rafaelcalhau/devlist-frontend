import * as React from 'react'
import { RepoProps } from '../../types'

export default function Repo ({ data }: RepoProps) {
  return (
    <>
      <div className='repo'>
        <div className='one'>
          <i className="trophy icon"></i>
        </div>
        <div className='two'>
          <a href={data.url} target='_blank'>{data.name} ({data.id})</a> <br />
          <small>{data.description}</small>
        </div>
      </div>

      <style jsx>
        {`
          .repo {
            display: flex;
            border-bottom: solid 1px #ddd;
            font-family: Roboto;
            margin: 4px 0;
            padding: 10px 0;
          }

          .repo .one {
            width: 40px;
          }

          .repo .two {
            width: calc(100% - 40px);
          }

          .icon {
            margin-right: 20px
          }

          a {
            color: #444;
            font-weight: 300;
            font-size: 1em;
            text-decoration: none
          }

          small {
            color: #777;
            font-weight: 300;
          }
        `}
      </style>
    </>
  )
}