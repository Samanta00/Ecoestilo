import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import _ from 'lodash';

const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};


const data = [
  ["Age", "Weight"],
  ["assistindo lucas neto", 12],
  ["assistindo youtube", 5.5],
  ["assistindo tarzam", 14],
  ["assistindo dora", 5],
  ["assistindo joanita", 3.5],
  ["assistindo peppa pig", 7]
];

export const Grafico=()=>{
    const [países, setPaíses] = useState([]);

    const loadData=(data)=>{
        const values=_.groupBy(data,(value)=>
            value.Pais)

        console.log("values", values)

        const mapeandoPaises=_.map(values, (value,key)=>
            [key,
            _.sumBy(values[key], (v)=> v.ano)
            ])
         console.log(mapeandoPaises)
         return [["fabricante", "venda"], ...mapeandoPaises]
    }

    

    useEffect(() => {
        const paísesdoGrafico=[   
               {
                Pais:"costa do marfim",
                ano:2015, 
               },
               {
                Pais:"Gana",
                ano:2014, 
               },
               {
                Pais:"Nigéria",
                ano:2010, 
               },
               {
                Pais:"Ucránia",
                ano:2018, 
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
    </div>      
    )


}
