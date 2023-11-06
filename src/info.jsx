import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import bibliografia from './images/bibliografia.svg';
import engrenagem from './images/engrenagem.svg';
import { Link } from 'react-router-dom';
import './App.css';
import './padroes.css';
import './links.css';

function Info(){
    return(
        <div className="App">
        <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-da-pagina" alt="logo" /></Link>
        <img className="title-pages"src={bibliografia} alt=""/>
        <img className="engrenagem" src={engrenagem} alt="" />
        </header>
        <body>
          <main>

            <a href="https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0"><p className="link-info">https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0</p></a>
            {/* <a href="https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0"><p className="link-info">https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0</p></a>
            <a href="https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0"><p className="link-info">https://www.figma.com/file/GMIqSA2kOTY8qbR8QBDCjD/TCC?type=design&node-id=1-80&mode=design&t=IUhclMlk7E2h5GCv-0</p></a> */}

          <br />

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

export default Info;