import { useState } from 'react';
import { useSelector } from 'react-redux';

const PotionFilter = ({ category, setCategory, search, setSearch, sort, setSort }) => {
  const potions = useSelector((state) => state);

  const categories = [
    { key: 'all', label: 'Toutes les potions' },
    { key: 'soin', label: 'Soin' },
    { key: 'magie', label: 'Magie' },
    { key: 'protection', label: 'Protection' },
  ];

  return (
    <section className="potion-filter-section">
      <div className="filter-card">
        <h2 className="section-title">🔍 Filtres & Recherche</h2>

        <div className="filter-group">
          <label className="filter-label">Catégorie :</label>
          <div className="category-filters">
            {categories.map((c) => (
              <button
                key={c.key}
                className={`category-btn ${category === c.key ? 'active' : ''}`}
                onClick={() => setCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Recherche par nom :</label>
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher une potion..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


        <div className="filter-group">
          <label className="filter-label"> Ordre par prix : 
            
          </label>
          <select
            className="price-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >

            <option value="default">Défaut</option>
            <option value="asc">Prix 📈</option>
            <option value="desc">Prix 📉</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default PotionFilter;
