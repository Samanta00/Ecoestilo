import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const [menu_class, setMenuClass] = useState("menu hidden");

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%'}}>
            <nav>
                {/* mobile */}
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                {/* web */}
                <div className="web-nav">
                    <h1>Ecoestilo</h1>
                    <ul>
                        <li><Link to="/"><span>Home</span></Link></li>
                        <li><Link to="/parcerias"><span>Parcerias</span></Link></li>
                        <li><Link to="/sobreNos"><span>Sobre nós</span></Link></li>
                        <li><Link to="/contatos"><span>Contatos</span></Link></li>
                    </ul>
                </div>
            </nav>
            {/* Menu que abre com o burger */}
            <div className={menu_class}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/parcerias">Parcerias</Link></li>
                    <li><Link to="/sobreNos">Sobre nós</Link></li>
                    <li><Link to="/contatos">Contatos</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar