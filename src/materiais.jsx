import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import equipamentos from './images/equipamentos.svg';
import engrenagem from './images/engrenagem.svg';
import robot from './images/robot.svg';
import { Link } from 'react-router-dom';
import './App.css';
import './materiais.css';

function Materiais(){
    return(
        <div className="App">
        <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-da-pagina" alt="logo" /></Link>
        <img className="title-pages"src={equipamentos} alt=""/>
        <img className="engrenagem" src={engrenagem} alt="" />
        </header>
        <body>
          <main>
        <div className="conteudo">
        <div className="main-img-div">
            <img className="main-image" src={robot} alt="" />
        </div>
        <div className="items">
        <div>
            <p>1 – Arduino UNO</p>
            <p>1 – Micro Servo 9g sg90 Towerpro</p>
            <p>1 – Placa UNO R3 com cabo usb, Arduino</p>
            <p>1 – Motor Shield L293D Driver Ponte H para Arduino</p>
            <p>1 – Mini Protoboard 170 Pontos</p>
            <p>1 – Sensor de Distância Ultrassônico HC-SR04 para Arduino</p>
            <p>1 – Kit Chassi 2WD (2 rodas) Robô para Arduino</p>
            <p>6 – Jumper 20cm (1 fio Macho-Macho)</p>
            <p>1 – Barra de Pinos 1×40 Fêmea 180 Graus</p>
            <p>1 – Buzzer/Speaker (som) 5v</p>
            <p>1 – Clip de Bateria 9V [Horizontal], Conector de Bateria</p>
            <p>2 – Abraçadeira de Nylon 15cm</p>
            <p>5 cm – Cabo Flexível Remoto de Cobre 1mm Preto</p>
            <p>1 cm – Fita dupla face colada no servo motor</p>
            <p>1 – Bateria de 9v Alcalina</p>
        </div>
        </div>
        </div>
            <div className='botoes'>
            
            <Link to='/projeto'><button>Objetivo</button></Link>
            <Link to='/publicoalvo'><button>Público-Alvo</button></Link>
            <Link to='/ideias'><button>Ideias</button></Link>
            <Link to='/materiais'><button>Equipamentos</button></Link>
            <Link to='/projeto'><button>Projeto</button></Link>
            <Link to='/bibliografia'><button>Bibliografia</button></Link>
  
            </div>
            
          </main>
        </body>
      </div>
    );
}

export default Materiais;