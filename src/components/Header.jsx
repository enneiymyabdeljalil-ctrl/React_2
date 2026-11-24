// ============================================
// Fichier : src/components/Header.jsx
// Composant : Header
// TP7 - REDUX : En-tête de l'application Atelier de Potions d'Astréa
// ============================================
// À compléter par l'étudiant :
// Importer React et éventuellement useSelector depuis react-redux

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="potion-icon">🧪</div>
          <h1 className="header-title">Atelier d'Astréa</h1>
          <span className="header-subtitle">École de Magie & Alchimie</span>
        </div>
        <nav className="header-nav">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/" className="nav-link">Potions</a>
          <a href="/" className="nav-link">Ingrédients</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
