import React from "react";
import imgGenerica from "../../assets/img/imgGenerica.jpg";
import greenPeace from "../../assets/img/greenPeace.png";
import WWF from "../../assets/img/WWF.jpg";
import FR from "../../assets/img/FR.webp";
import RW from "../../assets/img/RW.png";

import "./Parcerias.css";

function Conteudo() {
  return (
    <div className="Content">
      <div className="imgContainer">
        <img className="imgG" src={imgGenerica} alt="" />
      </div>
      <div className="objetivo">
        <h4>
          A iniciativa Ecoestilo tem como objetivo combater o descarte
          inadequado de produtos têxteis de segunda mão em todo o mundo, visando
          a sustentabilidade ambiental e a redução do impacto negativo da
          indústria da moda no meio ambiente. Para isso, contamos com a
          colaboração de parceiros engajados nessa causa, que nos auxiliam na
          detecção dos países que mais realizam esse tipo de descarte e na
          coleta desses produtos antes que cheguem a outros continentes. Abaixo,
          apresentamos alguns dos nossos principais parceiros:
        </h4>

        <div className="parceiro">
          <img src={greenPeace} alt="" />
          <p>
            Greenpeace: O Greenpeace é uma organização internacional que atua na
            defesa do meio ambiente e dos direitos humanos. Através de suas
            campanhas e atividades, o Greenpeace tem sido um importante aliado
            na luta contra o descarte inadequado de tecidos de segunda mão em
            todo o mundo.
          </p>
        </div>

        <div className="parceiro">
          <img src={WWF} alt="" />
          <p>
            WWF: O WWF é uma organização internacional que tem como objetivo a
            conservação da natureza e a redução do impacto humano no meio
            ambiente. Através de suas campanhas e projetos, o WWF tem colaborado
            com a Ecoestilo na identificação dos países que mais descartam
            tecidos de segunda mão de forma inadequada.
          </p>
        </div>

        <div className="parceiro">
          <img src={FR} alt="" />
          <p>
            Fashion Revolution: A Fashion Revolution é um movimento global que
            luta por uma indústria da moda mais justa, transparente e
            sustentável. Através de suas campanhas e atividades, a Fashion
            Revolution tem contribuído com a Ecoestilo na conscientização sobre
            o impacto do descarte inadequado de tecidos de segunda mão no meio
            ambiente.
          </p>
        </div>

        <div className="parceiro">
          <img src={RW} alt="" />
          <p>
            The Renewal Workshop: A Renewal Workshop é uma empresa que se dedica
            à reciclagem e reutilização de roupas e tecidos usados. Através de
            suas atividades, a Renewal Workshop tem sido uma importante parceira
            da Ecoestilo na recuperação de tecidos de segunda mão e na redução
            do impacto ambiental da indústria da moda.
          </p>
        </div>

        <div className="parceiro">
          <h4>
            Juntos, esses parceiros têm sido fundamentais para o sucesso da
            nossa iniciativa Ecoestilo, permitindo-nos identificar os países que
            mais realizam o descarte inadequado de tecidos de segunda mão e
            trabalhar em soluções para esse problema. Agradecemos a todos eles
            pela colaboração e apoio nessa causa tão importante para a
            preservação do meio ambiente.
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Conteudo;
