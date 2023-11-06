import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import vselement from './vselement.svg';
import { Link } from 'react-router-dom';
import './App.css';

function Home(){
    return(
        <div className="App">
        <header className="App-header">
        <img className="titulo"src={vselement} alt=""/>
        </header>
        <body>
        <img src={logo_tcc} className="App-logo" alt="logo" />
          <main>
            
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

export default Home;