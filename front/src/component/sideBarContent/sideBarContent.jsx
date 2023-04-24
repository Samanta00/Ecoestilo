import "./sideBarContent.css";
import img from '../CardHome/assets/tenis.jpg';

export default function sideBarContent() {
  return (
    <div className="sidebarContent">
      <p>CATEGORIAS EXTRAS</p>

      <div class="sidebarCard">
        <img src={img} alt="" class="sidebarCardImg" />
        <p class="siderbarCardTitle">BICICLETAS</p>
      </div>
      <div class="sidebarCard">
        <img src={img} alt="" class="sidebarCardImg" />
        <p class="siderbarCardTitle">ESPORTES DE FRIO</p>
      </div>
      <div class="sidebarCard">
        <img src={img} alt="" class="sidebarCardImg" />
        <p class="siderbarCardTitle">FUTEBOL AMERICANO</p>
      </div>
      <div class="sidebarCard">
        <img src={img} alt="" class="sidebarCardImg" />
        <p class="siderbarCardTitle">SKATE</p>
      </div>
      <div class="sidebarCard">
        <img src={img} alt="" class="sidebarCardImg" />
        <p class="siderbarCardTitle">YOGA</p>
      </div>
    </div>
  );
}
