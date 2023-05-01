import Navbar from "../../component/NavBar";

import tecidoVerde from "../../assets/img/tecido-verde.jpg";
import floresta from "../../assets/img/floresta.jpg";
import paisagem from "../../assets/img/paisagem.jpg";

import "./SobreNos.css";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";

export default function SobreNos() {
  return (
    <>
      <Navbar />
      <Banner texto="About us" />
      <div className="Content">

        <div className="objetivo">

          <div className="sobreImagemDiretia">
            <div className="conteudoSobre">
              <h2>
                Combatendo o descarte inadequado de tecidos de segunda mão: conheça a Ecoestilo
              </h2>
              <p>
                A Ecoestilo é uma iniciativa voltada para a promoção da sustentabilidade ambiental na indústria da moda. Nosso objetivo é combater o descarte inadequado de tecidos de segunda mão em todo o mundo, visando a preservação do meio ambiente e a redução do impacto negativo dessa indústria em nosso planeta.
              </p>
            </div>
            <img src={tecidoVerde} alt="" />
          </div>

          <div className="sobreImagemEsquerda">
            <img src={floresta} alt="" />
            <div className="conteudoSobre">
              <h2>O impacto negativo da indústria da moda no meio ambiente</h2>
              <p>
                Acreditamos que é fundamental adotar medidas eficazes para enfrentar o crescente problema do descarte inadequado de roupas e tecidos usados, que resulta em uma grande quantidade de resíduos têxteis em aterros sanitários e em outras áreas inapropriadas. Ao detectar os países que realizam o maior volume de descarte inadequado de tecidos de segunda mão, podemos possibilitar a pronta identificação e recolhimento desses produtos antes que alcancem outros continentes.
              </p>
            </div>
          </div>

          <div className="sobreImagemDiretia">
            <div className="conteudoSobre">
              <h2>Identificando os países com o maior volume de descarte inadequado de tecidos: a missão da Ecoestilo</h2>
              <p>
                A Ecoestilo foi fundada por um grupo de profissionais engajados e apaixonados pela moda e pelo meio ambiente, que perceberam a necessidade de buscar soluções inovadoras e sustentáveis para a indústria da moda. Acreditamos que, com a união de esforços, podemos transformar a indústria da moda em um setor mais ético, justo e ambientalmente responsável.
              </p>
            </div>
            <img src={paisagem} alt="" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
