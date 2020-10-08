import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

//img-logo
import logo from "../../assets/images/logo.png";

//react-icons
import { AiFillHome } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const Header = ({ links }) => {
  const { notas, cronogramas, classroom } = links;
  return (
    <header>
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="header-content">
        <ul>
          <li>
            <Link to="/">
              <AiFillHome />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/arquivos/">
              <ImFilesEmpty />
              <p>Arquivos</p>
            </Link>
          </li>
          <li>
            <BsPencilSquare />
            <a href={notas}>Notas</a>
          </li>
          <li>
            <MdSchedule />
            <a href={cronogramas}>Cronogramas</a>
          </li>
          <li>
            <SiGoogleclassroom />
            <a href={classroom}>Classroom</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
