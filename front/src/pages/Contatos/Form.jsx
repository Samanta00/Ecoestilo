import "./Contatos.css";

export default function Form() {
  return (
    <div className="Container">
      <div className="contactUs">
        <div className="title">
        </div>
        <div className="box">
          {/* Form */}
          <div className="contact form">
            <h3>Envie uma mensagem</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>Primeiro nome</span>
                    <input type="text" placeholder="João" />
                  </div>

                  <div className="inputBox">
                    <span>Sobrenome</span>
                    <input type="text" placeholder="Duntra" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="joaoduntra@gmail.com" />
                  </div>
                  <div className="inputBox">
                    <span>Telefone</span>
                    <input type="text" placeholder="+91 987 654 3210" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Mensagem</span>
                    <textarea placeholder="Escreva a sua mensagem aqui..."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Enviar" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* Info box */}
          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span><ion-icon name="location"></ion-icon></span>
                <p>5534 Somewhere In. The World <br/> BRASIL</p>
              </div>
              <div>
                <span><ion-icon name="mail"></ion-icon></span>
                <a href="mailto:loremipsum@email.com">ecoestilo@email.com</a>
              </div>
              <div>
                <span><ion-icon name="call"></ion-icon></span>
                <a href="tel:+919876543210">+91 987 654 3210</a>
              </div>
              {/* Social Media Links */}
              <ul className="sci">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              </ul>
            </div>
          </div>
          {/* Map */}
          <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.056772913335!2d77.21013709617547!3d28.62891131983222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20Nova%20Delhi%2C%20Deli%20110001%2C%20%C3%8Dndia!5e0!3m2!1spt-BR!2sbr!4v1683135595858!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
