export default function Dev ({ avatar, id, login }) {
  return (
    <>
      <div className='box'>
        <div className='avatar'>
          <img src={avatar} />
        </div>
        <div className='info'>
          {id}<br />
          <span>{login}</span>
        </div>
      </div>
      <style jsx>
        {`
          .box {
            display: inline-flex;
            flex-direction: column;
            margin: 15px;
            width: calc(20% - 30px)
          }

          .avatar {
            align-self: center;
            border-radius: 75px;
            height: 100%;
            width: 100%;
            max-width: 150px;
            max-height: 150px;
            overflow: hidden
          }

          .avatar img {
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

          .info span {
            border-radius: 3px;
            color: #333;
            display: inline-block;
            min-width: 120px;
            padding: 3px 0;
          }
        `}
      </style>
    </>
  )
}
