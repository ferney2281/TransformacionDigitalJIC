import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { NivelesDominio } from '../components/competencies/NivelesDominio';
import { Gobernanza } from '../components/competencies/Gobernanza';
import { Development } from '../components/competencies/Development';
import { Roadmap } from '../components/competencies/Roadmap';
import { OnlineCourses } from '../components/competencies/OnlineCourses';

import { 
  mainHeaderData,
  mainTabsData, 
  catalogSubTabsData, 
  catalogContentData 
} from '../data/competenciesData';
import './Competencies.css';

export const Competencies = () => {
  const [activeMainTab, setActiveMainTab] = useState('catalogo');
  const [activeSubTab, setActiveSubTab] = useState('tecnologia');

  const currentCategoryData = catalogContentData[activeSubTab] || catalogContentData.tecnologia;

  return (
    <div className="main-layout">
      <Navbar activePage="competencias" />

      <main className="competencies-page-wrapper">
        <div className="container competencies-container">
          
          {/* ENCABEZADO PRINCIPAL HERO */}
          <section className="competencies-hero-section">
            <div className="competencies-hero-header">
              <div className="competencies-hero-icon-circle">
                <img 
                  src={mainHeaderData.iconUrl} 
                  alt={mainHeaderData.title} 
                />
              </div>
              <div className="competencies-hero-text">
                <h1 className="competencies-hero-title">{mainHeaderData.title}</h1>
                <p className="competencies-hero-subtitle">{mainHeaderData.subtitle}</p>
              </div>
            </div>
          </section>

          {/* BARRA DE PESTAÑAS PRINCIPALES */}
          <nav className="main-tabs-nav" aria-label="Navegación principal de competencias">
            {mainTabsData.map((tab) => (
              <button
                key={tab.id}
                className={`main-tab-item ${activeMainTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveMainTab(tab.id)}
              >
                <span className="material-symbols-outlined notranslate" translate="no">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* VISTA PRINCIPAL: CATÁLOGO */}
          {activeMainTab === 'catalogo' && (
            <div className="catalog-outer-card">
              <div className="catalog-header">
                <div className="catalog-header-icon">
                  <span className="material-symbols-outlined notranslate" translate="no">
                    grid_view
                  </span>
                </div>
                <div>
                  <h2 className="catalog-title">Catálogo de competencias</h2>
                  <p className="catalog-subtitle">
                    Conoce las competencias que necesitas para impulsar la transformación digital en cada área de la organización.
                  </p>
                </div>
              </div>

              <nav className="sub-tabs-nav" aria-label="Categorías del catálogo">
                {catalogSubTabsData.map((subTab) => (
                  <button
                    key={subTab.id}
                    className={`sub-tab-item ${activeSubTab === subTab.id ? 'active' : ''}`}
                    onClick={() => setActiveSubTab(subTab.id)}
                  >
                    <span className="material-symbols-outlined notranslate" translate="no">
                      {subTab.icon}
                    </span>
                    <span>{subTab.label}</span>
                  </button>
                ))}
              </nav>

              <div className={`category-detail-card theme-${activeSubTab}`}>
                <div className="category-header">
                  <div className="category-icon-circle">
                    <span className="material-symbols-outlined notranslate" translate="no">
                      {currentCategoryData.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="category-title">{currentCategoryData.title}</h3>
                    <p className="category-desc">{currentCategoryData.description}</p>
                  </div>
                </div>

                <div className="competency-blocks-grid">
                  {currentCategoryData.categories?.map((block) => (
                    <div key={block.id} className="competency-block-card">
                      <div className="block-card-header">
                        <span className="material-symbols-outlined block-icon notranslate" translate="no">
                          {block.icon}
                        </span>
                        <h4 className="block-card-title">
                          <span className="block-code">{block.code}</span> {block.title}
                        </h4>
                      </div>

                      <div className="block-items-list">
                        {block.items?.map((item) => (
                          <div key={item.id} className="competency-item-row">
                            <span className="material-symbols-outlined item-chevron notranslate" translate="no">
                              {item.icon || 'chevron_right'}
                            </span>
                            
                            <div className="item-info">
                              <h5 className="item-title">{item.title}</h5>
                              <p className="item-desc">{item.description}</p>
                            </div>

                            <div className="item-badge-container">
                              <span className={`badge-level ${item.levelType}`}>
                                {item.level}
                              </span>
                              <span className="material-symbols-outlined item-arrow-link notranslate" translate="no">
                                chevron_right
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VISTAS RESTANTES */}
          {activeMainTab === 'niveles' && <NivelesDominio />}
          {activeMainTab === 'gobernanza' && <Gobernanza />}
          {activeMainTab === 'desarrollo' && <Development />}
          {activeMainTab === 'hoja-ruta' && <Roadmap />}
          {activeMainTab === 'cursos' && <OnlineCourses />}

        </div>
      </main>

      <Footer />
    </div>
  );
};