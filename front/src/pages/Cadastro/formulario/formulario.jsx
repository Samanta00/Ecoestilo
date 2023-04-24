import React from "react";
import '../style/formulario.css'

const Formulario=()=>{
    return(
        <form method="POST" action="" encType="multipart/form-data" id="form-adiciona" >
        <div className="grupo">
            <label for="nome">Foto</label>

            <input type="file" accept="image/png,image/jpeg" />
        </div>
        <div className="grupo">
            <label for="nome">Nome:</label>
            <input id="nome" name="nome" type="text" placeholder="Digite seu Nome" className="campo" />
        </div>
        <div className="grupo">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="Digite seu Email" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="telefone">Telefone:</label>
            <input id="telefone" name="telefone" type="text" placeholder="Digite seu Telefone" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="endereco">Endereco:</label>
            <input id="endereco" type="endereco" placeholder="Digite seu Endereço" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="cpf">CPF:</label>
            <input id="cpf" type="cpf" placeholder="Digite seu CPF" className="campo campo-medio" />
        </div> 
    </form>
    )
}
export default Formulario