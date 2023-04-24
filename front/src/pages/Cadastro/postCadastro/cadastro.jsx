import React from "react";
import ButtonsNavegation from "../../buttonsNavegation/buttonNavegation";
import ButtonCadastro from "./PostButton";
import Formulario from "../formulario/formulario.jsx";


const Cadastro = () => {
    return (
        <div>
            
            <section className="container">
                <div className="class-mae">
                        <div className="titulo">
                            <h2 className="tituloForm">Novo Usuário</h2> 
                        </div>
                    
                        
                        <div className="conteudo">
                            <Formulario />
                            <ButtonCadastro />
                        </div>
                </div>

            </section>
            <ButtonsNavegation rota1='/pageshttp' rota2="/home" />
        </div>
    )
}

export default Cadastro