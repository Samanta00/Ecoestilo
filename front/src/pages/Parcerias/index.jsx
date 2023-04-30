import React from 'react';
import Conteudo from './conteudo';

import Navbar from '../../component/NavBar';
import Banner from '../../component/Banner';
import Footer from '../../component/Footer';

function Parcerias() {
  return (
    <>
      <Navbar />
      <Banner texto="Parcerias" />
      <Conteudo />
      <Footer />
    </>

  )
};
//  <ModalOptions/>
export default Parcerias;