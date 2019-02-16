
const SectionKiteSurf = ({ title, description, btnTitle, imgUrl }) => (
  <div className='container' style={{ backgroundImage: `url(${imgUrl})` }}>
    <div className='info'>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
      <a href='/'>{btnTitle}</a>
    </div>

    <style jsx>{`
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {  
        .container {
          background: rgb(65, 64, 64);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          height: 472px;
          background-image: url('../static/sections/kiteSurf.jpg');
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
        .info h4 {
          margin: 0 0 15px 0;
          font-size: 24px;
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
