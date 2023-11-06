import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import ideias from './images/ideias.svg';
import engrenagem from './images/engrenagem.svg';
import ideiarobot from './images/ideiarobot.svg';
import { Link } from 'react-router-dom';
import './App.css';
import './padroes.css';

function Ideia() {
  return (
    <div className="App">
      <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-da-pagina" alt="logo" /></Link>
        <img className="title-pages" src={ideias} alt="" />
        <img className="engrenagem" src={engrenagem} alt="" />
      </header>
      <body>
        <main>

          <img className="main-image" src={ideiarobot} alt="" />

          <p className="description">A ideia surgiu por todos os integrantes do grupo,
            foi uma ideia bem pensada e com muito carinho para crianças com deficiencia
            visual. Não pegamos ideias da internet, criamos a nossa própria ideia.</p>

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

export default Ideia;