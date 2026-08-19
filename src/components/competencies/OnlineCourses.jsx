import React, { useState } from 'react';
import { coursesData } from '../../data/competenciesData';
import './OnlineCourses.css';

export const OnlineCourses = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { header, categories, items } = coursesData;

  const filteredCourses = activeFilter === 'all' 
    ? items 
    : items.filter(course => course.category === activeFilter);

  return (
    <div className="courses-container">
      <div className="courses-card">
        
        {/* HEADER */}
        <div className="courses-header-block">
          <div className="courses-header-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {header.icon}
            </span>
          </div>
          <div>
            <h2 className="courses-header-title">{header.title}</h2>
            <p className="courses-header-desc">{header.description}</p>
          </div>
        </div>

        {/* FILTROS DE CATEGORÍA */}
        <div className="courses-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* LISTA DE CURSOS */}
        <div className="courses-list">
          {filteredCourses.map((course) => (
            <a 
              key={course.id} 
              href={course.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="course-item-card"
            >
              <div className="course-logo-box">
                {course.logoType === 'meta' && (
                  <span className="material-symbols-outlined logo-icon meta-color notranslate" translate="no">
                    all_inclusive
                  </span>
                )}
                {course.logoType === 'google' && (
                  <span className="material-symbols-outlined logo-icon google-color notranslate" translate="no">
                    g_translate
                  </span>
                )}
                {course.logoType === 'sena' && (
                  <span className="material-symbols-outlined logo-icon sena-color notranslate" translate="no">
                    nature_people
                  </span>
                )}
              </div>

              <div className="course-details">
                <h4 className="course-title">{course.title}</h4>
                <p className="course-platform">{course.platform}</p>
                <div className="course-meta-tags">
                  <span className="tag-certificate">{course.certificate}</span>
                  <span className="tag-separator">|</span>
                  <span className="tag-price">{course.price}</span>
                </div>
              </div>

              <div className="course-action">
                <span className="material-symbols-outlined notranslate" translate="no">
                  open_in_new
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};