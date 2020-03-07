import { Layout, Repos } from '../../components'
import api from '../../services/api'
import { ProfileData } from '../../types'

function Dev (props: ProfileData) {
  const formattedDate = (date: string) => new Date(date).toLocaleDateString()

  return (
    <Layout>
      <div className='container'>
        <div className='dev'>
          <div className='avatar'>
            <div className='overlay' />
            <img src={props.avatar} />

            <div className='info'>
              <span>{props.name}</span> <br />
              <small>{props.id} | {props.login}</small> <br />
              <small>
                <a href={props.link} className='link' target='_blank'>{props.link}</a>
              </small> <br />
              <small className='since'>No GitHub desde {formattedDate(props.created_at)}</small>
            </div>
          </div>
        </div>

        <div className='repos'>
          <Repos login={props.login} />
        </div>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            position: relative;
            max-width: 90%;
            margin: 0 auto;
          }

          .dev {
            display: flex;
            flex-direction: column;
            width: 400px;
            position: relative;
          }

          .avatar {
            background-color: #f3f3f3;
            border-radius: 50%;
            box-shadow: rgba(0,0,0,.1) 0 40px 10px;
            display: flex;
            position: absolute;
            width: 400px;
            height: 400px;
          }

          .avatar img {
            border: solid 10px #f6f6f6;
            border-radius: 50%;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 15px;
            left: -10px;
            z-index: 2
          }

          .avatar .overlay {
            border-radius: 50%;
            box-shadow: inset rgba(0,0,0,.2) 0 0 15px;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 15px;
            z-index: 3
          }

          .info {
            top: 430px;
            left: 0;
            right: 0;
            font-family: Roboto;
            line-height: 24px;
            padding: 25px 0;
            position: absolute;
            text-align: center;
            z-index: 2;
          }

          .info a {
            text-decoration: none
          }

          .info span {
            font-size: 1.2em;
          }

          .info .link {
            color: gray
          }

          .repos {
            border-radius: 3px;
            height: calc(100% - 100px);
            width: 50%;
            margin: 50px 0;
          }

          @media (max-width: 1040px) {
            .dev {
              width: 300px;
            }

            .avatar {
              width: 300px;
              height: 300px;
            }

            .info {
              top: 330px;
            }
          }

          @media (max-width: 840px) {
            .container {
              flex-direction: column
            }

            .dev {
              align-items: center;
              align-self: center;
              width: 100%;
              min-height: 380px;
              justify-content: flex-start;
            }

            .avatar {
              width: 200px;
              height: 200px;
            }

            .repos {
              margin: 0 auto;
              width: 80%;
            }

            .info {
              top: 230px;
            }
          }

          @media (max-width: 530px) {
            .container {
              max-width: 94%;
            }

            .repos {
              margin: 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  )
}

Dev.getInitialProps = async function ({ query }: any) {
  const { login } = query
  const response = await api.get(`/api/users/${login}`)
  const { data } = response

  const profile: ProfileData = {
    id: data.id,
    login: data.login,
    avatar: data.avatar_url,
    name: data.name,
    link: data.html_url,
    created_at: data.created_at
  }

  return profile
}

export default Dev