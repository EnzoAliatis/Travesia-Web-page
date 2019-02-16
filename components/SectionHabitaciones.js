import { HABITACIONES } from '../data'
const SectionThree = () => (
  <div className='container'>
    <h2>
      HABITACIONES
    </h2>
    <span />
    <p>
      comodidad frente al mar
    </p>
    <div className='imgsContainer'>
      {
        HABITACIONES.map(habitacion => (
          <div className='imgRoom' key={habitacion.id}>
            <div className='imgInfo'>
              <h3>{habitacion.title}</h3>
              <p>{habitacion.description}</p>
              <h4>${habitacion.price}<span>/noche</span></h4>
            </div>
            <img src={`/static/rooms/${habitacion.src}`} />
          </div>
        ))
      }
    </div>

    <style jsx>{`
    @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {  
      .container {
        background: #FBFCFD;
        display: grid;
        grid-template: auto / 80%;
        justify-items: center;
        justify-content: center;
        padding: 60px 0 40px 0;
        color: #515151;
      }  
      .container h2 {
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 400;
      }
      .container span {
        border: solid 2px #03324D;
        width: 25%;
        margin-bottom: 5px;
      }
      .imgsContainer {
        display: grid;
        grid-template: auto / 100%;
        grid-row-gap: 2px;
      }
      .imgRoom {
        width: 300px;
        height: 300px;
        position: relative;
      }
      .imgRoom img {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .imgInfo {
        background: rgba(0,0,0,0.3);
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .imgInfo h3 {
        font-size: 30px;
        font-weight: 400;
        margin: 0;
      }
      .imgInfo h4 {
        font-size: 35px;
        font-weight: 700;
        margin: 0;
      }
      .imgInfo h4 span {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        border: 0;
      }
      .imgInfo p {
        margin: 5px 0;
      }
    }
    `}</style>
  </div>
)

export default SectionThree
