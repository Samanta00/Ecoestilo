import React, { useState } from "react";
import { Grafico } from "../grafico/grafico";
import Navbar from "../../NavBar";
import Footer from "../../Footer";

export default function ContextoGrafico() {
  return(
    <>
      <Navbar />
      <Grafico/>
      <Footer />
    </>
  );
}
