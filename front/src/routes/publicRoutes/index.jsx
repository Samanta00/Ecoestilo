import React from 'react';
import { Route } from 'react-router-dom';
// import PagesHome from '../../pages/Home/home';
// import PagesLogin from '../../pages/Login/login';
// import Cadastro from '../../pages/Cadastro/postCadastro/cadastro'
import PagesHome from '../../pages/Home/home';
import Parcerias from '../../pages/Parcerias';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesHome />}/>
    <Route path='/parcerias' element={<Parcerias />}/>

  </React.Fragment>
)





