const BluePanelButton = ({ title, btnTitle }) => (
  <div className='container'>
    <div className='info'>
      <h4>
        {title}
      </h4>
      <a href='https://www.booking.com/hotel/ec/cabanas-la-travesia.en-gb.html?aid=356980;label=gog235jc-1DCAsoQUITY2FiYW5hcy1sYS10cmF2ZXNpYUgzWANoQYgBAZgBCbgBB8gBDNgBA-gBAYgCAagCAw;sid=13bd436102878bbd069e61052597e031;dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&'
        target='_blank'>{btnTitle}</a>

    </div>

    <style jsx>{`
      .info h4 {
        margin: 0;
        font-size: 22px;
        font-weight: 600; 
      }
      .info a {
        border: solid 1px #fff;
        border-radius: 50px;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        padding: 12px 30px;
        margin: 15px 5px 20px;
        transition: 0.3s;
      }

    @media only screen  and (min-width : 1024px) {
      .container {
        height: 160px;
        background: #002d40;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .info a:hover {
        color: rgb(0, 44, 69);
        background: #FFF;
      }
    }
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
