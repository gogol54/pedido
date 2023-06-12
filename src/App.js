import { useState } from "react";
import styled from 'styled-components'

const Btn = styled.button`
  cursor: none;
  color: white;
  background-color: brown;
  margin-left: 20px;
  &:hover {
    position:absolute;
    right: 0;
    margin-left:0;
    transition:2s;
  }
`
const Btn1 = styled.button`
  &:hover {
    position:absolute;
    left:0;
    right: 0;
    margin-left:0;
    transition:2s;
  }
`

function App() {
  const [control, setControl] = useState(false)
  const [verify, setVerify] = useState(false)
  function pressedOk() {
    setControl(!control)
  }
  function handlePressed() {
    setVerify(true)
  }
  return (
    <div className="App">
      <div className="container container-fluid" style={{margin: 'auto'}}>
        <center>
          <img 
            width=""
            src="https://3.bp.blogspot.com/-VvAuDDzpaAQ/W-uKsij5pDI/AAAAAAABcb0/q82SeULs_1Eczn59vS2ibBEgz7IQWfdaACLcBGAs/s1600/love%2Bamor%2Bgif%2B%252810%2529.gif" 
            alt="corações caindo do céu para Luisa Sonza"
          />
          <h3  
            style={{
              fontFamily:'Franklin Gothic Medium',
              color: '#dadada',
              marginTop: '40px',
              fontSize: '24px'
            }}
          >Luísa Gerloff Sonza,<br /><p style={{fontSize: '20px'}}>Quer namorar comigo?</p></h3>
          <Btn1 className="btn btn-success" onClick={() => pressedOk()}>Sim</Btn1>
          {
            verify ?
            <>
            <button 
              style={{marginLeft:'20px'}}
              className="btn btn-danger" 
              id="hello" 
              onClick={() => pressedOk()
            }
            >Sim, só que em vermelho</button>
            </>
            :
            <Btn
              className="btn"
              onClick={() => handlePressed()}
            >Não
            </Btn>
          }
          <button 
            className="btn btn-danger" 
            id="hello" 
            style={{display: 'none'}} 
            onClick={() => pressedOk()
          }
          >Sim, só que em vermelho</button>
          {
            control != false ?
            <>
            <p 
            style={{
              color: '#dadada',
              fontFamily: 'Franklin Gothic Medium',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: 'rgb(124, 86, 160)',
                marginTop: '30px'
              }}
            id="message"
            >OK, me chama quando vier para o RS (55)98118-0042 😘
              
            </p>
            <p 
              style={{
                color: '#dadada',
                fontFamily: 'Franklin Gothic Medium',
                fontSize: '14px',
                backgroundColor: 'rgb(124, 86, 160)',
                marginTop: '30px'
              }}
            id="me2"
            >Pode confiar, eu não tenho medo da macumba do Whinderson! 😂😂😂
            </p>
            </>
            :
            null
          }
          
        </center>
      </div>
    </div>
  );
}

export default App;
