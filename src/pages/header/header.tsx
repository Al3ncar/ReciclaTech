import LogoRecycle from "../../assets/recicla-logo.png";
import RecButton from "../../components/button/button";

export default function Header() {
  return (
    <header className="header">
      <section className="header__navgation">
        <figure>
          <img src={LogoRecycle} alt="Logo de Reciclagem" />
          <figcaption>
            <p>ReciclaTech</p>
          </figcaption>
        </figure>
        <div className="header__navgation--nav">
          <nav>
            <ul>
              <li>Como Funciona</li>
              <li>Doar</li>
              <li>Adquirir</li>
            </ul>
          </nav>
          <div className="header__navgation--nav__btn">
            <RecButton type="default" label="Começar Agora"/>
          </div>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </header>
  );
}
