import Navbar from "../../component/NavBar";

import tecidoVerde from "../../assets/img/tecido-verde.jpg";
import floresta from "../../assets/img/floresta.jpg";
import paisagem from "../../assets/img/paisagem.jpg";

import "./SobreNos.css";
import Banner from "../../component/Banner";

export default function SobreNos() {
  return (
    <>
      <Navbar />
      <Banner texto="About us" />
      <div className="Content">

        <div className="objetivo">

          <div className="sobreImagemDiretia">
            <div>
              <p>
                Greenpeace: O Greenpeace é uma organização internacional que atua
                na defesa do meio ambiente e dos direitos humanos. Através de suas
                campanhas e atividades, o Greenpeace tem sido um importante aliado
                na luta contra o descarte inadequado de tecidos de segunda mão em
                todo o mundo.
              </p>
            </div>
            <img src={tecidoVerde} alt="" />
          </div>

          <div className="sobreImagemEsquerda">
            <img src={floresta} alt="" />
            <div>
              <p>
                Greenpeace: O Greenpeace é uma organização internacional que atua
                na defesa do meio ambiente e dos direitos humanos. Através de suas
                campanhas e atividades, o Greenpeace tem sido um importante aliado
                na luta contra o descarte inadequado de tecidos de segunda mão em
                todo o mundo.
              </p>
            </div>
          </div>

          <div className="sobreImagemDiretia">
            <div>
              <p>
                Greenpeace: O Greenpeace é uma organização internacional que atua
                na defesa do meio ambiente e dos direitos humanos. Através de suas
                campanhas e atividades, o Greenpeace tem sido um importante aliado
                na luta contra o descarte inadequado de tecidos de segunda mão em
                todo o mundo.
              </p>
            </div>
            <img src={paisagem} alt="" />
          </div>

        </div>
      </div>
    </>
  );
}
