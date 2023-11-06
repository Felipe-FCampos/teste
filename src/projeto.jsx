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
                  para auxiliar crianças que não enxergam, 
                  esse carro robô a criança vai usar em casa 
                  porque geralmente os pais não tem 100% do 
                  tempo pra criança e o carrinho vai cantar 
                  música para interagir com a criança. 
                  Nele irá conter um acessório para poder guardar a bengala que usa de apoio.
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