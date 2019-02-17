
const SectionKiteSurf = ({ title, description, btnTitle, imgUrl, direction }) => (
  <div className='container' style={{ backgroundImage: `url(${imgUrl})`, justifyContent: `${direction}` }}>
    <div className='info'>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
      <a href='/'>{btnTitle}</a>
    </div>

    <style jsx>{`
      .info h4 {
        margin: 0 0 15px 0;
        font-size: 24px;
      }

      @media only screen  and (min-width : 1024px) {
        .container { 
          height: 335px;
          color: #FFF;
          display: flex;
          align-items: center;
          padding: 0 20%;
          background-repeat:no-repeat;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          background-position: center center;
          background-attachment: scroll;
        }
        .info {
          width: 500px;
          display: flex;
          flex-direction: column;
        }
        .info a {
          margin-top: 10px;
          border: solid 1px #fff;
          padding: 10px 25px;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
          width: 90px;
          text-align: center;
          transition: 0.3s;
        }
        .info p {
          line-height: 185%;
          font-weight: 300;
        }
        .info a:hover {
          color: rgb(0, 44, 69);
          background: #FFF;
        }
      }

      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {  
        .container {
          background: rgb(65, 64, 64);
          display: flex;
          flex-direction: column;
          justify-content: center !important;
          align-content: center;
          align-items: center;
          height: 472px;
          background-repeat: no-repeat, repeat;
          background-position: center;
          background-size: cover; 
          color: #fff;
          overflow: hidden;
        }
        .info {
          width: 80%;
        }
        .info p {
          margin: 0;
          font-size: 15px;
          line-height: 185%;
          margin-bottom: 20px;
        }
        .info a {
          margin-top: 10px;
          border: solid 1px #fff;
          padding: 10px 25px;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
        }
      }  
    `}</style>
  </div>
)

export default SectionKiteSurf
