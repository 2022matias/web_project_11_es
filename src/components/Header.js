import Logo from "../images/Logo.png";
import Line from "../images/Line.png";

function Header() {
	return(
		<header className="header">
        <img
          src={Logo}
          className="header__logo"
          alt="logo que dice Around the U.S."
         />
        <img
          src={Line}
          className="header__line"
          alt="linea que separa el encabezado del resto de la pagina"
         />
      </header>
	);
}

export default Header;