import React from 'react';
import { Route } from 'react-router-dom';
import Contatos from '../../pages/Contatos';
import PagesHome from '../../pages/Home/home';
import Parcerias from '../../pages/Parcerias';
import SobreNos from '../../pages/SobreNos';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesHome />}/>
    <Route path='/parcerias' element={<Parcerias />}/>
    <Route path='/sobre-nos' element={<SobreNos />} />
    <Route path='/contatos' element={<Contatos />} />
  </React.Fragment>
)





