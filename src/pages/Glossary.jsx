// src/pages/Glossary.jsx
import React, { useState, useMemo } from 'react';
import { glossaryData, glossaryCategories } from '../data/glossaryData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import './Glossary.css';
import searchIcon from '../assets/search.svg';
import glossaryIcon from '../assets/Glosario.png';

export const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortOrder, setSortOrder] = useState('A-Z');

  // Filtrado y ordenamiento en tiempo real
  const filteredTerms = useMemo(() => {
    let result = glossaryData.terms || [];

    // 1. Filtrar por Categoría
    if (selectedCategory !== 'todos') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 2. Filtrar por Buscador (término o descripción)
    if (searchTerm.trim() !== '') {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        item => item.term.toLowerCase().includes(query) || 
                item.description.toLowerCase().includes(query)
      );
    }

    // 3. Ordenar
    result = [...result].sort((a, b) => {
      if (sortOrder === 'A-Z') return a.term.localeCompare(b.term);
      return b.term.localeCompare(a.term);
    });

    return result;
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="main-layout">
      <Navbar activePage="glosario" />

      <div className="content-bg-wrapper">
        <section className="container glossary-hero">
          <div className="glossary-header">
            <div className="glossary-icon-circle">
              <img src={glossaryData.icon} alt="Glosario" />
            </div>
            <div>
              <h1 className="glossary-title">{glossaryData.title}</h1>
              <p className="glossary-subtitle">{glossaryData.subtitle}</p>
            </div>
          </div>

          {/* BUSCADOR */}
          <div className="search-bar-container">
  <img src={searchIcon} alt="Buscar" className="search-icon-img" />
  <input 
    type="text" 
    placeholder="Buscar un término..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
</div>

          {/* ETIQUETAS DE CATEGORÍA */}
          <div className="category-tabs">
            {glossaryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* LISTADO DE CONCEPTOS */}
        <section className="container glossary-list-section">
          <div className="sort-bar">
            <label htmlFor="sort">Ordenar: </label>
            <select 
              id="sort" 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              className="sort-select"
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>

          <div className="glossary-cards-container">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item) => (
                <div key={item.id} className="glossary-card">
                  <div className="term-icon">🏛️</div>
                  <div className="term-info">
                    <h3 className="term-title">{item.term}</h3>
                    <p className="term-description">{item.description}</p>
                  </div>
                  {/* Si el concepto incluye un enlace dinámico, renderiza el botón Ver */}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-ver"
                    >
                      Ver
                    </a>
                  )}
                </div>
              ))
            ) : (
              <p className="no-results">No se encontraron términos para la búsqueda.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};