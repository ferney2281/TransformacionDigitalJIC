// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/contentData';
import './Navbar.css';

export const Navbar = ({ activePage = 'inicio' }) => {
  const { header } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo-container">
          {header.logoUrl && (
            <img src={header.logoUrl} alt={header.logoText} className="logo-img" />
          )}
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            {header.navLinks.map((item) => {
              const isActive = activePage === item.id;
              const route = item.id === 'tools' || item.id === 'herramientas' ? '/tools' : '/';

              return (
                <li key={item.id} className={`nav-item ${isActive ? 'active' : ''}`}>
                  <Link to={route} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="btn-primary nav-cta">{header.ctaButton}</button>
        </nav>
      </div>
    </header>
  );
};