import img from './assets/lixao.png';
import './HomeContent.css';
import grafico from './assets/grafico.png';
import tecido from './assets/tecido.png';
import { Link } from 'react-router-dom';



export default function HomeContent() {



  return (
    <div className="gridContainer">
      <div className="mainContent">
        <Link className="categotyCard" to="/Pesquisa">
          <img src={tecido} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">Saiba mais</p>
          <p className="mainCategoryCardDescription">
          Saiba como o tecido têxtil pode ser reaproveitado
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">PESQUISA</p>
          <p className="mainCategoryCardDescription">
          Pesquisa de satisfação sobre o assunto abordado
          </p>
        </Link>
      </div>



      <div className="sidebarContent">
        <p>CATEGORIAS EXTRAS</p>

        <Link className="sidebarCard" to="/Pesquisa">
          <img src={grafico} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">Visualização de Dados têxtil</p>
        </Link>
      </div>
    </div>
  );
}
