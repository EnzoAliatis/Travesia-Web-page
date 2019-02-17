const SectionQuestion = () => (
  <div className='container'>
    <div className='title'>
      <h4>QUESTIONS ?</h4>
      <hr />
    </div>
    <div className='form'>
      <form action=''>
        <input type='text' id='name' name='name' placeholder='Name' />
        <input type='text' id='email' name='email' placeholder='Email Address' />
        <input type='text' id='companyName' name='companyName' placeholder='Company Name' />
        <button type='submit'>Enviar</button>
      </form>
    </div>

    <style jsx>{`
      @media only screen  and (min-width : 1024px) {
        .container {
          background: #FAFBFD;
          height: 235px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;

        }
        .title h4 {
          font-weight: 600;
          color: #515151;
          font-size: 28px;
          margin: 0;
        }
        .title hr {
          width: 50px; 
          border-color: #03324D;
          border-width: 1.5px;
        }
        .form {
          display: flex;
          flex-direction: row;
        }
        .form input {
          display: block;
          width: 195px;
          height: 56px;
          background: #fff;
          border: 1px solid #d3d3d3;
          border-radius: 5px;
          padding: 0px 15px;
          margin-bottom: 20px;
          box-shadow: 0 0 0;
          border: solid 0.1px rgba(0,0,0,0.1);
          margin: 0 10px;
        }
        .form button {
          background: #00324e;
          color: #fff;
          border-radius: 50px;
          display: block;
          text-align: center;
          width: 195px;
          height: 50px;
          margin: auto;
          font-size: 18px;
          margin: 0;
        }
        form {
          display: flex;
        }
      }

      @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {   
        .container {
          background: #FAFBFD;
          display: flex;
          flex-direction: column;
          height: 450px;
          justify-content: space-evenly;
          align-items: center;
        }
        .title h4 {
          font-weight: 600;
          color: #515151;
          font-size: 28px;
          margin: 0;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .form input {
          display: block;
          width: 225px;
          height: 56px;
          background: #fff;
          border: 1px solid #d3d3d3;
          border-radius: 5px;
          padding: 0px 15px;
          margin-bottom: 20px;
          box-shadow: 0 0 0;
          border: solid 0.1px rgba(0,0,0,0.1);
        }
        .form button {
          background: #00324e;
          color: #fff;
          border-radius: 50px;
          display: block;
          text-align: center;
          width: 225px;
          height: 50px;
          margin: auto;
          font-size: 18px;
        }
        .title hr {
          width: 50px; 
          border-color: #03324D;
          border-width: 1.5px;
        }
      }
    `}</style>
  </div>
)

export default SectionQuestion
