import React from "react";
import CardHome from "../../component/CardHome/CardHome";
import sideBarContent from "../../component/sidebarContent/sidebarContent";
import "./conteudo.css";

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
        <div className="bloco1">
          {/* <hr /> */}
          <h1 className="tema">Ecoestilo</h1>
          <div className="blocoEsquerdoPrincipal">
            <article className="font">
              <p className="link">
                fonte:https://br.freepik.com/vetores-premium/logotipo-do-medico-dentista-segurando-o-desenho-do-mascote-do-desenho-animado-de-dente-triste_11686850.htm
              </p>
            </article>
            <div className="blocoDireitoPrincipal"></div>
          </div>
        </div>
      </div>
      <hr />

      <div className="bloco2">
        <h3 className="perguntaIntrodutoria">
          O'que eu aprenderei com esse sistema de software?
        </h3>

        <div className="introducao">
          <h4>
            Com o Gold teeth health Você terá um gerenciador da Saúde contra o
            cancer bucal, o sistema de software foi projetado para auxiliar de
            uma forma divertida e educativa Pessoas que sofram ou não com a
            doença{" "}
          </h4>
        </div>

        <div className="blocosenta"></div>

        <div className="gridContainer">
          <CardHome />
          <sideBarContent />
        </div>

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
