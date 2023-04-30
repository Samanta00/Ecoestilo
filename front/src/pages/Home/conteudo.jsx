import React from "react";
import HomeContent from "../../component/HomeContent";

import brandSprite from "../../assets/img/brands-sprite-green.png";

import "./conteudo.css";
import Footer from "../../component/Footer";

function Conteudo() {
  return (
    <>
      <div className="divMae">
        <div className="container">
          <div className="content">
            <h2>
              Não jogue fora, <span>transforme</span>.
            </h2>
            <p>
              Transforme o seu estilo em um <span>Ecoestilo</span>: junte-se a nós no combate ao descarte indevido de tecidos e ajude a preservar o planeta com a <span>Ecoestilo</span>.
            </p>
          </div>
          <div class="buttons">
            <button className="buttonRight">Sobre nós</button>
            <button className="buttonLeft">Parcerias</button>
          </div>
        </div>
      </div>

      <div className="bloco2">

        <div className="blocosenta"></div>

        <div className="rodapeMarcas">
          <img src={brandSprite} alt="" />
        </div>

        <HomeContent />
        <Footer />

        <footer></footer>
      </div>
    </>
  );
}

export default Conteudo;
