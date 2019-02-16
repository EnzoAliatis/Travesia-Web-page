import React from 'react'

const SectionTwo = () => (
  <div className='container'>
    <div className='info'>
      <h2>Tu hotel frente al mar</h2>
      <p>
        Disponemos de 8 habitaciones tipo cabañas muy cómodas con internet wifi en todas nuestras instalaciones y la mejor atención que podrá encontrar en el sector.
      </p>
      <p>
        Contamos también con un excelente Bar con cocteles tropicales, piscina, zona de BBQ y de descanso para nuestros huéspedes.
      </p>
      <p>
        En la temporada de viento (mayo – diciembre) puedes dedicar tiempo a practicar o aprender deportes como : KITESURF (más popular), SUP (paddleboarding), SURF y KAYAK.
      </p>
    </div>
    <div className='IframeContainer'>
      <iframe width='98%' height='225px' src='https://www.youtube.com/embed/3kDKZkYREHE' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />    </div>
    <style jsx>{`
      @media only screen  and (min-width : 1024px) {
        .container {
          background: #EBECED;
          color: #515151;
          padding: 60px 0 30px 0;
          display: grid;
          grid-template-columns: 550px 550px;
          grid-template-rows: 350px;
          grid-column-gap: 20px;
          justify-content: center;
        }  
        .IframeContainer iframe {
          height: 100%;
        }
        .info h2 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #515151;
          font-weight: 400;
        }
        .info p {
          margin: 0px 0px 10px 0px;
          line-height: 185%;
          text-align: justify;
        }
      }
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
        .container {
          background: #EBECED;
          color: #515151;
          padding: 60px 0 30px 0;
        }  
        .info {
          display: grid;
          grid-template: auto / 70%;
          justify-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .info h2 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #515151;
          font-weight: 400;
        }
        .info p {
          margin: 0px 0px 10px 0px;
          line-height: 185%;
          text-align: justify;
        }
        .IframeContainer {
          width: 100vw;
        }
        iframe {
          display: block;
          margin: 0 auto;
        }
   
      }
    `}</style>
  </div>
)

export default SectionTwo
