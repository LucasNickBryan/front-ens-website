import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets//brand/logo.png";
import $ from 'jquery';

const NavItem = (props) => {
  return <span className="nav-link">{props.children} </span>
}

export default function MainNavbar() {

  const onToggle = () => {
    const menutoggle = document.querySelector('.toggle');
    menutoggle.classList.toggle('active')
    $('.submenu').fadeToggle(200);
  }

  useEffect(() => {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 100) {
        $('.custom-navbar').addClass('affix');
      } else {
        $('.custom-navbar').removeClass('affix');
      }
    });
  }, [])
  return (
    <div className="NAVBAR_STYLES">
      <nav className="navbar custom-navbar navbar-expand-lg">
        <div className="container">
          <div className="top_nv">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>

            <div className="toggle" onClick={onToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="menu">
            <ul className="flex pt-3 ml-auto">
              <li className="">
                <NavLink to="/">
                  <NavItem>Accueil</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/actuality">
                  <NavItem>Actualité</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/history">
                  <NavItem>Historique</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/club">
                  <NavItem>Club ANF</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/gallery">
                  <NavItem>Galerie</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/staff">
                  <NavItem>Personnel</NavItem>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/contact">
                  <NavItem>Contact</NavItem>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="submenu">
            <ul>
              <NavLink to="/">
                <li onClick={onToggle}>Accueil</li>
              </NavLink>
              <NavLink to="/actuality">
                <li onClick={onToggle}>Actualité</li>
              </NavLink>
              <NavLink to="/history">
                <li onClick={onToggle}>Historique</li>
              </NavLink>
              <NavLink to="/club">
                <li onClick={onToggle}>Club ANF</li>
              </NavLink>
              <NavLink to="/gallery">
                <li onClick={onToggle}>Galerie</li>
              </NavLink>
              <NavLink to="/staff">
                <li onClick={onToggle}>Personnel</li>
              </NavLink>
              <NavLink to="/contact">
                <li onClick={onToggle}>Contact</li>
              </NavLink>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

// export default Index;
