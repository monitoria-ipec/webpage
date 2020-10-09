import React, { useState } from "react";
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
import { FaBars } from "react-icons/fa";

const ListLinks = ({ links }) => {
  const { notas, cronogramas, classroom } = links;
  return (
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
        <a rel="noopener noreferrer" target="_blank" href={notas}>
          Notas
        </a>
      </li>
      <li>
        <MdSchedule />
        <a rel="noopener noreferrer" target="_blank" href={cronogramas}>
          Cronogramas
        </a>
      </li>
      <li>
        <SiGoogleclassroom />
        <a rel="noopener noreferrer" target="_blank" href={classroom}>
          Classroom
        </a>
      </li>
    </ul>
  );
};

const Header = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="header-content-desktop">
        <ListLinks links={links} />
      </div>
      <div
        className={
          showLinks
            ? "header-content-mobile links-on"
            : "header-content-mobile links-off"
        }
      >
        <ListLinks links={links} />
      </div>
      <div className="header-icon-bars">
        <FaBars
          className="icon-bars"
          onClick={() => setShowLinks(!showLinks)}
        />
      </div>
    </header>
  );
};

export default Header;
