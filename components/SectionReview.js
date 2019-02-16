
const SectionReview = ({ data }) => (
  <div className='container'>
    <div className='title'>
      <h4>GUEST REVIEWS</h4>
      <hr />
    </div>

    {
      data.map(element => (
        <div className='reviewContainer' key={element.id}>
          <div className='textoContainer'>
            <p className='texto'>
              {element.review}
            </p>
          </div>
          <div className='infoUser'>
            <div className='img'>
              <img src={`../static/reviews/${element.avatarUri}`} alt='review 1' />
            </div>
            <div className='user'>
              <p>{element.userName}</p>
              <span>“{element.userSpan}”</span>
            </div>
          </div>
        </div>
      ))
    }

    <style jsx>{`
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {   
        .container {
          background: #5E6C72;
          color: #FFF;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 40px 0;
        }
        .title {
          margin-bottom: 25px;
        }
        .title h4 {
          font-weight: 400;
          font-size: 28px;
          margin: 0;
        }
        .title hr {
          width: 50px; 
          border-color: #FFF;
          border-width: 1.5px;
        }
        .reviewContainer {
          width: 70%;
          margin: 20px 0px;
        }
        .textoContainer {
          background: #546167;
          padding: 30px;
          font-size: 22px;
          font-style: italic;
          font-weight: 300;
          position: relative;
          border-radius: .4em;
        }
        .textoContainer:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 16%;
          width: 0;
          height: 0;
          border: 18px solid transparent;
          border-top-color: #546167;
          border-bottom: 0;
          border-right: 0;
          margin-left: -9px;
          margin-bottom: -18px;
        }
        .infoUser {
          display: flex;
          align-items: center;
          margin-top: 30px;
        }
        .img img {
          border-radius: 50%;
          margin: 0px 20px;
        }
        .user p {
          font-size: 18px;
          margin: 0px;
        }
        .user span {
          font-size: 14px;
        }
      }
    `}</style>
  </div>
)

export default SectionReview
