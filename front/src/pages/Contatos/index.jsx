import Navbar from "../../component/NavBar";
import Footer from "../../component/Footer";
import Banner from "../../component/Banner";

import "./Contatos.css";
import Form from "./Form";

export default function Contatos() {
  return(
    <>
      <Navbar />
      <Banner texto="Contact us" />
      <Form />
      <Footer />
    </>
  );
}