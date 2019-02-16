import React from 'react'

const SectionOne = () => (
  <div className='container'>
    <h2>TRAVESIA HOTEL</h2>
    <span />
    <p>
      Ubicados en la playa de Sta. Marianita, a tan solo 15 minutos de la ciudad de Manta, en la cual disfrutar de su excelente clima y cálidas aguas es un regalo, su ubicación estratégica le permite disfrutar de las mejores playas de Manabí.
    </p>
    <style jsx>{`
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {  
        .container {
          display: grid;
          grid-template: auto / 80%;
          background: #FBFCFD;
          color: #515151;
          justify-items: center;
          justify-content: center;
          padding: 60px 0 40px 0;
        }
        .container h2 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 400;
        }
        .container span {
          border: solid 2px #03324D;
          width: 25%;
        }
        .container p {
          margin: 16px 0;
          font-size: 16px;
          line-height: 185%;
          text-align: center;
          color: #5c5c5c;
        }
      }
    `}</style>
  </div>
)

export default SectionOne
