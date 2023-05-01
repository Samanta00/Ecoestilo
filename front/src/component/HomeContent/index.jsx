import img from './assets/tenis.jpg';
import './HomeContent.css';
import { Grafico } from './grafico/grafico';




export default function HomeContent() {



  return (
    <div className="gridContainer">
      <div className="mainContent">
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
        <div className="categotyCard">
          <img src={img} alt="mainCardImg" className="mainCardImg" />
          <p className="mainCategoryCardTitle">BOXE</p>
          <p className="mainCategoryCardDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate tempore reiciendis eius iusto debitis accusantium ipsam
            consequatur ullam quod!
          </p>
        </div>
      </div>



      <div className="sidebarContent">
        <p>CATEGORIAS EXTRAS</p>

        <div className="sidebarCard" >
          <Grafico/>
        </div>


        <div className="sidebarCard">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">ESPORTES DE FRIO</p>
        </div>
        <div className="sidebarCard">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">FUTEBOL AMERICANO</p>
        </div>
        <div className="sidebarCard">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">SKATE</p>
        </div>
        <div className="sidebarCard">
          <img src={img} alt="" className="sidebarCardImg" />
          <p className="siderbarCardTitle">YOGA</p>
        </div>
      </div>
    </div>
  );
}
