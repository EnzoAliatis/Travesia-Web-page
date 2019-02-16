
const Footer = () => (
  <div>
    <div className='container'>
      <div className='imgContainer'>
        <img src='/static/logos/tinylogo.png' alt='logo' />
      </div>
      <div className='presentation'>
        <p>
          Disponemos de 8 habitaciones tipo cabañas muy cómodas con internet wifi en todas nuestras instalaciones y la mejor atención que podrá encontrar en el sector.
        </p>
      </div>
      <div className='idiomas'>
        <h5>Idioma:</h5>
        <span>Español</span><span>English</span>
      </div>
      <div className='contactos'>
        <h5>Contactos</h5>
        <div>
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='envelope' className='svg-inline--fa fa-envelope fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z' /></svg>
          <span>info@travesiahotel.com</span>
        </div>
        <div>
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='mobile-alt' className='svg-inline--fa fa-mobile-alt fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path fill='currentColor' d='M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z' /></svg>
          <span>+593 (9)921 06363</span>
        </div>
        <div>
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='map-marker-alt' className='svg-inline--fa fa-map-marker-alt fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z' /></svg>
          <span>Cómo llegar?</span>
        </div>
      </div>
      <div className='social'>
        <h5>Social</h5>
        <svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='facebook-square' className='svg-inline--fa fa-facebook-square fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z' /></svg>
        <svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='instagram' className='svg-inline--fa fa-instagram fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' /></svg>
      </div>
      <div className='recientes'>
        <h5>Entradas recientes</h5>
        <div>
          <p>
            El Celebrity anuncíon en Manta con más de 3 mil turistas
          </p>
          <span>
            03 de abril de 2017
          </span>
        </div>
        <div>
          <p>
            Kitesurf en Santa Marianita
          </p>
          <span>
            31 de marzo de 2017
          </span>
        </div>
        <div>
          <p>
            Playa Santa Marianita Manta
          </p>
          <span>
            31 de marzo de 2017
          </span>
        </div>
      </div>
    </div>
    <div className='footerEnd'>
      <p>® 2019 Travesía Hotel </p>
    </div>

    <style jsx>{`
      @media only screen  and (min-width : 1024px) {
        .container {
          background: #24282B;
          color: #d2d2d2;
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 25px;
          grid-template-columns: 350px 350px 350px;
          grid-template-rows: 60px 110px auto;
          grid-template-areas: "logo contactos recientes"
                               "presentation contactos recientes"
                               "idiomas social recientes";
          justify-content: center;
          padding: 50px;
        }
        .imgContainer {
          grid-area: logo;
        }
        .presentation {
          grid-area: presentation;
          line-height: 150%;
          text-align: justify;

        }
        .idiomas {
          grid-area: idiomas;
        }
        .contactos {
          grid-area: contactos;
        }
        .recientes {
          grid-area: recientes;
        }
        .contactos h5 {
          margin-bottom: 25px;
        }
        .contactos svg {
          width: 5%;
          margin-right: 5px;
        }
        .social svg {
          width: 13%;
          margin-right: 10px;
        }
        h5 {
          font-size: 20px;
          font-weight: 400;
          margin: 0;
          margin-bottom: 5px;
        }
        .footerEnd {
          background: #202326;
          height: 100px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .footerEnd p {
          margin: 0;
          color: #d2d2d2;
          text-align: center;
        }
        .idiomas span {
          margin-right: 15px;
        }
      }
      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
        .container {
          color: #d2d2d2;
          display: grid;
          grid-template: auto / 80%;
          background: #24282B;
          justify-content: center;
        }
        .imgContainer {
          height: 50px;
          margin-top: 55px;
        }
        .container p {
          font-size: 15px;
        }
        h5 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .presentation {
          line-height: 185%;
          margin-top: 40px;
        }
        .idiomas span {
          margin-right: 15px;
        }
        .contactos div {
          display: flex;
          align-items: center;
          margin: 8px 0;
        }
        .contactos svg {
          width: 5%;
          margin-right: 5px;
        }
        .social svg {
          width: 13%;
          margin-right: 10px;
        }
        .recientes div {
          border-bottom: solid #2B2F32 1px;
          margin-bottom: 20px;
        }
        .recientes p {
          margin: 0;
        }
        .recientes span {
          font-size: 12px;
          color: #848484;
        }

        .footerEnd {
          background: #202326;
          height: 100px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .footerEnd p {
          margin: 0;
          color: #d2d2d2;
          text-align: center;
        }
        
      }
    `}</style>
  </div>
)

export default Footer
