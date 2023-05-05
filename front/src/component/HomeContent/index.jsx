import img from './assets/tenis.jpg';
import './HomeContent.css';
import { Grafico } from './grafico/grafico';
import { Link } from 'react-router-dom';



export default function HomeContent() {



  return (
    <div className="gridContainer">
      <div className="mainContent">
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
        <Link className="categotyCard" to="/Pesquisa">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </Link>
      </div>



      <div className="sidebarContent">
        <p>CATEGORIAS EXTRAS</p>

        <Link className="sidebarCard" to="/Pesquisa">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">ESPORTES DE FRIO</p>
        </Link>
        <Link className="sidebarCard" to="/Pesquisa">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">ESPORTES DE FRIO</p>
        </Link>
        <Link className="sidebarCard" to="/Pesquisa">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">FUTEBOL AMERICANO</p>
        </Link>
        <Link className="sidebarCard" to="/Pesquisa">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">SKATE</p>
        </Link>
        <Link className="sidebarCard" to="/Pesquisa">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">YOGA</p>
        </Link>
      </div>
    </div>
  );
}
