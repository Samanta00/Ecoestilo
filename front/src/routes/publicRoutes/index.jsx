import React from 'react';
import { Route } from 'react-router-dom';
// import PagesHome from '../../pages/Home/home';
// import PagesLogin from '../../pages/Login/login';
// import Cadastro from '../../pages/Cadastro/postCadastro/cadastro'
import PagesHome from '../../pages/Home/home';
import Conteudo from '../../pages/Quiz/index';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesHome />}/>
    <Route path='/recomendacoes' element={<Conteudo/>}/>

  </React.Fragment>
)





