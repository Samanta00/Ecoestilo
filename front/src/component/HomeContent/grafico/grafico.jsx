import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import _ from 'lodash';



export const Grafico=()=>{
    const [países, setPaíses] = useState([]);

    const loadData=(data)=>{
        const values=_.groupBy(data,(value)=>
            value.Pais)

        console.log("values", values)

        const mapeandoPaises=_.map(values, (value,key)=>
            [key,
            _.sumBy(values[key], (v)=> v.taxaImportacao)
            ])
         console.log(mapeandoPaises)
         return [["fabricante", "venda"], ...mapeandoPaises]
    }

    

    useEffect(() => {
        const paísesdoGrafico=[   
               {
                Pais:"Costa do Marfim",
                taxaImportacao:128700, 
               },
               {
                Pais:"Gana",
                taxaImportacao:181000000
               },
               {
                Pais:"Nigéria",
                taxaImportacao:123000000
               },
               {
                Pais:"Tanzânia",
                taxaImportacao:102000000
               },
               {
                Pais:"Quênia",
                taxaImportacao:122000000
               },
               {
                Pais:"Uganda",
                taxaImportacao:110700000
               },
               {
                Pais:"Argélia",
                taxaImportacao:124000000
               },
               {
                Pais:"Ucrânia",
                taxaImportacao:154000000
               },
               {
               Pais:"Mali",
               taxaImportacao: 141000
              },
          ];
         setPaíses(loadData(paísesdoGrafico))
      },[]);



    return(
      <div>
        <h1>Gráficos</h1>
            <Chart
            chartType="PieChart"
            data={países}
            // options={options}
            width="80%"
            height="400px"
            legendToggle
            />

            <div>
              <h2>Países que sofrem com a poluição Têxtil</h2>
              <h3>De acordo com o gráfico listado, esses são os países que mais sofrem com a poluição têxtil, são lugares de 
                baixo índice de desenvolvimento, onde a desigualdade social é enorme
              </h3>


              
                <h3>Empresas Fest Fashion</h3>
               <table>
                <tr border='1'>
                  <th>Empresas Fast Fashion</th>
                  <td>Shein</td>
                  <td>Lacoste</td>
                  <td>Zara</td>
                  <td>Polo</td>
                  <td>Diesel</td>
                  <td>Bershka</td>
                  <td>Splash</td>
                  <td>C&A</td>
                  <td>Adidas</td>
                </tr>
               </table>
            </div>
    </div>      
    )


}
