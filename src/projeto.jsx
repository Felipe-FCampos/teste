import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import projeto from './images/projeto.svg';
import engrenagem from './images/engrenagem.svg';
import robot2 from './images/robot2.svg';
import { Link } from 'react-router-dom';
import './App.css';
import './materiais.css';

function Projeto() {
  return (
    <div className="App">
      <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-da-pagina" alt="logo" /></Link>
        <img className="title-pages" src={projeto} alt="" />
        <img className="engrenagem" src={engrenagem} alt="" />
      </header>
      <body>
        <main>

          <div className="conteudo2">
            <div className="main-img-div">
              <img className="main-image" src={robot2} alt="" />
            </div>
            <div className="description-project">
              <h1>Ozzy</h1>
              <p>
                Nosso objetivo é criar um carro robô 
                para auxiliar crianças que não enxergam. 
                Este carro robô será utilizado pelas crianças em casa, 
                uma vez que os pais geralmente não têm 100% do tempo 
                disponível para elas. O carrinho também será capaz de cantar 
                músicas para interagir com a criança e conterá um acessório 
                para guardar a Bengala que a criança usa como apoio
              </p>
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

export default Projeto;