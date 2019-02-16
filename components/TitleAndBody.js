const TitleAndBody = ({ title, body }) => (
  <div className='container'>
    <div className='title'>
      <h2>{title}</h2>
      <hr />
    </div>

    <div className='body'>
      {
        body.map((parrafo, idx) => (
          <p key={idx + 3}>{parrafo}</p>
        ))
      }
    </div>

    <style jsx>{`
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
        .container {
          display: grid;
          grid-template: auto / 70%;
          justify-content: center;
          color: #474747;
          margin: 40px 0;
        }
        .title h2 {
          margin-bottom: 0;
          font-size: 28px;
        }
        .title hr {
          width: 30%;
          border: solid #002C45 1.5px;
          margin-left: 0;
        }
        .body p {
          color: #5c5c5c;
          font-size: 15px;
          line-height: 185%;
        }
      }
    `}</style>
  </div>
)

export default TitleAndBody
