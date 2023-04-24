import api from "../apiCadastros"
import { useNavigate } from 'react-router-dom';
import React from "react";

const ButtonCadastro=()=>{
    const navigate = useNavigate()
const cadastrandoPessoa = async(pessoa)=>{ 
    try{
        await api.post('/customers', pessoa)
   }
   catch(error){
       console.log(error)
   }
}
function submit(e){
   e.preventDefault()
   const cadastroPessoas={
       nome:document.getElementById('nome').value,
       email:document.getElementById('email').value,
       telefone:document.getElementById('telefone').value,
       endereco:document.getElementById('endereco').value,
       cpf:document.getElementById('cpf').value
   }
   cadastrandoPessoa(cadastroPessoas)
}  

function Voltar() {
    
    return navigate(`/`)
}

return(
    <div>
        <button onClick={Voltar}>Voltar</button>
        <button onClick={submit}>Adicionar</button>
    </div>
)
}
export default ButtonCadastro