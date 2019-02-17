import { HABITACIONES } from '../data'
import Link from 'next/link'

const SectionThree = () => (
  <div className='container'>
    <h2>
      HABITACIONES
    </h2>
    <hr />
    <p>
      comodidad frente al mar
    </p>
    <div className='imgsContainer'>
      {
        HABITACIONES.map(habitacion => (
          <Link href='/rooms' key={habitacion.id}>
            <div className='imgRoom'>
              <div className='imgInfo'>
                <div className='dataContainer'>
                  <h3>{habitacion.title}</h3>
                  <p>{habitacion.description}</p>
                  <h4>${habitacion.price}<span>/noche</span></h4></div>
              </div>
              <img src={`/static/rooms/${habitacion.src}`} />
            </div>
          </Link>
        ))
      }
    </div>

    <style jsx>{`
      .container h2 {
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 400;
        margin-bottom: 0;
      }
      .container hr {
        border: solid 2px #03324D;
        width: 60px;
        margin-bottom: 5px;
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

    @media only screen  and (min-width : 1024px) {
      .container {
        background: #FBFCFD;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px;
        color: #515151;
        font-weight: 300px;
      }
      .imgsContainer {
        display: flex;
      }
      .imgsContainer img {
        width: 285px;
        height: 285px;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        transition: transform .2s; 
      }
      .dataContainer {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      .imgInfo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        color: #FFF;
        background: rgba(23, 49, 66, 0.6);
        z-index: 10;
        opacity: 0;
        transition: 0.3s; 
      }
      .imgRoom {
        position: relative;
        width: 285px;
        height: 285px;
        margin: 0 10px;
        overflow: hidden;
        cursor: pointer;
      }
      .imgInfo:hover {
        opacity: 1;
      }
      .imgInfo:hover + img {
        transform: scale(1.2);
      }
    }
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
    }
    `}</style>
  </div>
)

export default SectionThree
