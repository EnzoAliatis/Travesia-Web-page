const BluePanelButton = ({ title, btnTitle }) => (
  <div className='container'>
    <div className='info'>
      <h4>
        {title}
      </h4>
      <a href='/'>{btnTitle}</a>
    </div>

    <style jsx>{`
    @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) { 
      .container {
        height: 228px;
        background: #002d40;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
      }  
      .info {
        width: 60%;
        text-align: center;
        line-height: 1.42857143;
      }
      .info h4 {
        margin: 0;
        font-size: 22px;
        font-weight: 600; 
      }
      .info a {
        display: inline-block;
        border: solid 1px #fff;
        border-radius: 50px;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        padding: 12px 30px;
        margin: 15px 5px 20px
      }
    }
    `}</style>
  </div>
)

export default BluePanelButton
