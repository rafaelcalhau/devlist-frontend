import * as React from 'react'
import Head from 'next/head'
import { ReactChildren } from '../types'

export default function Layout (props: ReactChildren) {
  return (
    <div className='container'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css'
          rel='stylesheet'
        />
      </Head>

      <header>
        <span>DevList</span> - Find talents for your project!
      </header>

      <main>
        {props.children}
      </main>
      <style jsx global>
        {`
          body {
            background: url('../assets/images/github.png') center 200px no-repeat;
            background-attachment: fixed;
            background-size: 300px 300px;
            margin: 0px;
            padding: 0px;
            min-height: 100vh
          }

          header {
            background-color: #f2f2f2;
            color: #777;
            font-family: Roboto;
            font-size: 1.3em;
            font-weight: 300;
            padding: 14px 0;
            text-align: center
          }

          header span {
            font-weight: 500;
          }

          main {
            padding: 30px 60px
          }

          @media (max-width: 530px) {
            main {
              padding: 30px 20px
            }
          }
        `}
      </style>
    </div>
  )
}
