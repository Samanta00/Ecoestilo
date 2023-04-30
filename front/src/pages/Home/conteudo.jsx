import React from "react";
import HomeContent from "../../component/HomeContent";

import brandSprite from "../../assets/img/brands-sprite-green.png";
import fotoPoluicao from "../../assets/img/poluicao.jpg";

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
              Transforme o seu estilo em um <span>Ecoestilo</span>: junte-se a
              nós no combate ao descarte indevido de tecidos e ajude a preservar
              o planeta com a <span>Ecoestilo</span>.
            </p>
          </div>
          <div class="buttons">
            <button className="buttonRight">Sobre nós</button>
            <button className="buttonLeft">Parcerias</button>
          </div>
        </div>
      </div>

      <div className="bloco2">
        <div className="intro">
          <img src={fotoPoluicao} alt="" />
          <div className="introTextos">
            <h2>O destino trágico das doações: o impacto da indústria da moda fast fashion em Gana</h2>
            <p>
              Toda semana, mais de 15 milhões de peças doadas para algumas ONGs
              por consumidores da Europa, China e dos Estados Unidos vão parar no
              país africano, onde são negociadas com comerciantes que as revendem
              problema é que as remessas têm vindo cada vez piores, são fruto da
              indústria da moda fast fashion, marcada por peças baratas e pouco
              duráveis. Estima-se que cerca de 40% das roupas enviadas terminam em
              lixões. Alguns deles, localizam-se próximo às áreas marítimas, o que
              acaba facilitando que as peças sejam levadas para o mar pelas ondas.
            </p>
            <p>
              O desperdício de peças que poderiam ser recicladas gera um prejuízo
              de US$ 500 bilhões por ano para a indústria da moda. Mas os maiores
              prejudicados acabam sendo os países pobres como Gana, que são
              transformados em verdadeiros depósitos de lixo para as grandes
              empresas produtoras dos países ricos
            </p>
          </div>
          
        </div>

        <div className="rodapeMarcas">
          <img src={brandSprite} alt="" />
        </div>

        <HomeContent />
        <Footer />
        
      </div>
    </>
  );
}

export default Conteudo;
