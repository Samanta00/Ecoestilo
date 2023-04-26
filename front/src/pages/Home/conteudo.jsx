import React from "react";
import HomeContent from "../../component/HomeContent";
import "./conteudo.css";

import rodapeMarcas from "./brands-sprite.png";

function Conteudo() {
  const virarCarta = () => {
    const card = document.querySelectorAll("#card");
    card.forEach((card) => {
      card.addEventListener("click", (e) => {
        card.classList.toggle("flip");
      });
    });
  };

  return (
    <>
      <div className="divMae">
        <div className="container">
          <div className="content">
            <h2>
              Não jogue fora, transforme.
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
        {/* <h3 className="perguntaIntrodutoria">
          O'que eu aprenderei com esse sistema de software?
        </h3>

        <div className="introducao">
          <h4>
            Com o Gold teeth health Você terá um gerenciador da Saúde contra o
            cancer bucal, o sistema de software foi projetado para auxiliar de
            uma forma divertida e educativa Pessoas que sofram ou não com a
            doença{" "}
          </h4>
        </div> */}

        <div className="blocosenta"></div>

        <div className="rodapeMarcas">
          <img src={rodapeMarcas} alt="" />
        </div>

        <HomeContent />

        <div className="colunao">
          <div className="coluna1">
            <h4 className="pergunta">
              {" "}
              Não sofro com A doença, Como o Sistema Poderia me Ajudar?
            </h4>
            <div className="flip" id="card" onClick={virarCarta}>
              <div className="face" id="front"></div>

              <div className="face" id="back">
                O Projeto de Software tras diversas formas educacionais e
                objetivas para a prevenção e o conhecimento do cancer bucal,
                desta forma uma pessoa saudavel será Ciente Sobre o assunto e
                suas responsabilidades para uma saúde saudavel.
              </div>
            </div>
          </div>

          <div className="coluna2">
            <h4 className="pergunta">
              {" "}
              Sofro com A doença, Como o Sistema Poderia me Ajudar?
            </h4>
            <div className="flip" id="card" onClick={virarCarta}>
              <div className="face" id="front"></div>

              <div className="face" id="back">
                Na Plataforma do Sistema de Software existem alguns cuidados
                especiais pensados em você, uns deles é o calendário de
                medicamentos assim que você agendar os dias para seus remedios
                será enviado uma mensagem no seu email para te lembrar do
                medicamento necessário para o dia agendado. Como forma de
                auxilia-lo(a) a um bem estar melhor, existe uma categoria de
                recomendações médicas no sistema para que você saiba com qual
                especialista médico realmente você pode se orientar.
              </div>
            </div>
          </div>
        </div>

        <footer></footer>
      </div>
    </>
  );
}

export default Conteudo;
