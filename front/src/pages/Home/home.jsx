import React from 'react';
import Conteudo from './conteudo';


import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'



function PagesHome(props) {
  return (
    <>
      <Navbar />
     
      <Conteudo/>
    </>

  )
};

//  <ModalOptions />
export default PagesHome;