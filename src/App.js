import { useState } from 'react'
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
const Video = styled.video`
  max-width: 80%:
  height: 50vw;
  @media (max-width:300px) and (min-width:600px) {
    width: 350px;
    height: 500px;
    max-width: 80%;
  }
`
function App() {
  const [control, setControl] = useState(false)
  const [verify, setVerify] = useState(false)
  const [next, setNext] = useState(null)

  function pressedOk() {
    setControl(!control)
  }
  function handlePressed() {
    setVerify(true)
  }
  return (<>
    {
      next == null ? 
      <div className="container container-fluid"
        style={{
          marginTop: '20px',
          backgroundColor: 'white',
          borderRadius: '20px',
          border: '20px solid gray'
        }}
      > 
        <center>
        <img 
          src='https://www.dhresource.com/0x0/f2/albu/g12/M01/F6/FD/rBVakV9GQDaAde7rAADQz645pp0090.jpg'
          width='100%'
          height='auto'
        />
        </center>
        <button 
          style={{
            float: 'right', 
            position: 'relative',
            top: '-40px'
          }}
          className='btn btn-success' 
          onClick={() => setNext(true)}
        >Abrir Cartão</button>
      </div>
      :
      <>
      <div className="App" style={{margin: '20px'}}>
      <div className="container container-fluid">
        <center>
          <Video controls loop autoplay id='vid'>
            <source 
              src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/WhatsApp%20Video%202023-07-23%20at%2014.53.00.mp4?alt=media&token=1b104b80-1d7a-49d0-bd0f-bf1e6694a66a' 
              type="video/mp4"
            />
          </Video>
          <h3  
            style={{
              fontFamily:'Franklin Gothic Medium',
              color: '#2b2b2b',
              marginTop: '0px',
              fontSize: '24px'
            }}
          >Ana Paula Albeche,<br /><p style={{fontSize: '20px'}}>Quer namorar comigo?</p></h3>
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
            control !== false ?
            <>
            <p 
            style={{
              maxWidth: '70%',
              color: '#dadada',
              fontFamily: 'Franklin Gothic Medium',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: 'rgb(124, 86, 160)',
                marginTop: '30px'
              }}
            id="message"
            >Considerando esta como única e melhor escolha, 
            saiba que te amo demais e espero que nossos dias sejam mais felizes à partir de hoje 😘...
            caso contrário, me responda pessoalmente suas razões de não querer rotular 
            nosso relacionamento para um namoro formalizado, ainda assim terá que viver sabendo que eu te amo :)~.
            Afinal, é sempre amor mesmo que mude.   
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
            >
            </p> 
            </>
            :
            null
          }
        </center>
        <img 
          src='https://i.pinimg.com/originals/7d/77/85/7d7785b423d0303a0bf5b2a45ef96e63.gif'
          width='80px'
          height='100px'
        />
      </div>
    </div>
      </>
    }
  </>
    
  )
}

export default App;
