import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import _ from "lodash";
import "./style/grafico.css";
import fasFasion from "../assets/Fashion-pollution.webp";

export const Grafico = () => {
  const [países, setPaíses] = useState([]);
  const [paisesPrejudiciais, setPaisesPrejudiciais] = useState([]);

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => value.Pais);

    console.log("values", values);

    const mapeandoPaises = _.map(values, (value, key) => [
      key,
      _.sumBy(values[key], (v) => v.taxaImportacao),
    ]);
    console.log(mapeandoPaises);
    return [["Países", "importação"], ...mapeandoPaises];
  };

  useEffect(() => {
    const paísesdoGrafico = [
      {
        Pais: "Costa do Marfim",
        taxaImportacao: 128700,
      },
      {
        Pais: "Gana",
        taxaImportacao: 181000000,
      },
      {
        Pais: "Nigéria",
        taxaImportacao: 123000000,
      },
      {
        Pais: "Tanzânia",
        taxaImportacao: 102000000,
      },
      {
        Pais: "Quênia",
        taxaImportacao: 122000000,
      },
      {
        Pais: "Uganda",
        taxaImportacao: 110700000,
      },
      {
        Pais: "Argélia",
        taxaImportacao: 124000000,
      },
      {
        Pais: "Ucrânia",
        taxaImportacao: 154000000,
      },
      {
        Pais: "Mali",
        taxaImportacao: 141000,
      },
    ];
    setPaíses(loadData(paísesdoGrafico));
  }, []);

  const loadPaisesPrejudicadores = (data) => {
    const values = _.groupBy(data, (value) => value.Pais);

    console.log("values", values);

    const mapeandoPaises = _.map(values, (value, key) => [
      key,
      _.sumBy(values[key], (v) => v.descarte),
    ]);
    console.log(mapeandoPaises);
    return [["Países Prejudiciais", "Taxa de Descarte"], ...mapeandoPaises];
  };

  useEffect(() => {
    const paisesPrejudiciais = [
      {
        Pais: "E.U.A",
        descarte: 580500000,
      },
      {
        Pais: "Espanha",
        descarte: 22480000,
      },
      {
        Pais: "Índia",
        descarte: 170800000,
      },
      {
        Pais: "Países do Golfo",
        descarte: 447900000,
      },
      {
        Pais: "China",
        descarte: 360600000,
      },
      {
        Pais: "Reino Unido",
        descarte: 272800000,
      },
      {
        Pais: "Alemanha",
        descarte: 258800000,
      },
      {
        Pais: "Austrália",
        descarte: 150000,
      },
      {
        Pais: "Coreia do Sul ",
        descarte: 256800000,
      },
    ];
    setPaisesPrejudiciais(loadPaisesPrejudicadores(paisesPrejudiciais));
  }, []);

  return (
    <div className="container">
      <div className="divPai">
        <h1>Países que sofrem com a poluição Têxtil</h1>
        <div className="graficoContainer">
          <Chart
            chartType="PieChart"
            data={países}
            width="600px"
            height="400px"
            legendToggle
            className="grafico"
          />
        </div>
        <div className="introducaoPaises">
          <h3>
            De acordo com o gráfico listado, esses são os países que mais sofrem
            com a poluição têxtil, são lugares de baixo índice de desenvolvimento
            onde a desigualdade social é enorme e com isso ganham desvantagem ao
            fast fashion. empresas dos Países do Golfo(Países ricos em Dubai)
            transportam roupas de segunda mão fazem as classificações de roupas em
            4 níveis entre roupas de marcas, roupas com tecido fraco, roupas
            comuns e roupas vintage, para mercadores que paguem por mais dinheiro
            alguns funcionários retiram peças boas e vendem por fora da
            empresa(obs: Roupas caras nunca vão parar na áfrica, eles acabam
            ficando em países ricos), para mercadores que pagam em igualmente a
            empresa misturam todos os tipos de roupas em embalagens com 40 kg de
            roupas.
          </h3>
        </div>
        <div className="container2">
          <h2>
            Agora que você já sabe onde vão parar suas roupas, você já parou para
            pensar quais são as empresas mundialmente causadoras do Fast Fashion
            que ocasionalmente resultam em poluição têxtil?{" "}
          </h2>
          <div>
            <img className="imagem" src={fasFasion}></img>
          </div>
          <div className="fastfashion">
            <h4>
              Logo a baixo foram listadas algumas marcas mundialmente conhecidas
              mas antes de exibi-las é importante ressaltar que empresas de roupas
              tendem a se inovar no mercado comercial, dessa forma a expansão de
              compras tendem a aumentar e com isso peças antigas sempre irão parar
              em lixos, onde a coleta armazena e vende para fornecedores que fazem
              a distribuição para o continente africanos(onde roupas mais frágeis
              são revendidas) e costa do marfim(onde roupas com melhores tecidos
              são revendidos)
            </h4>
          </div>
          <div className="tabelaContainer">
            <table>
              <tr border="1">
                <th>Empresas Fast Fashion</th>
              </tr>
              <tr>
                <td>Shein</td>
              </tr>
              <tr>
                <td>Lacoste</td>
              </tr>
              <tr>
                <td>Zara</td>
              </tr>
              <tr>
                <td>Polo</td>
              </tr>
              <tr>
                <td>Diesel</td>
              </tr>
              <tr>
                <td>Bershka</td>
              </tr>
              <tr>
                <td>Splash</td>
              </tr>
              <tr>
                <td>C&A</td>
              </tr>
              <tr>
                <td>Adidas</td>
              </tr>
            </table>
          </div>
        </div>
        <h3>
          índices do gráfico mostram quais são os países mais causadores de dados
        </h3>
        <Chart
          chartType="PieChart"
          data={paisesPrejudiciais}
          // options={options}
          width="80%"
          height="400px"
          legendToggle
        />
      </div>
    </div>
  );
};
