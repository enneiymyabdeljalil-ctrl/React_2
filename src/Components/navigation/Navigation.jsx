function Navigation() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul style={{ 
        display: "flex", 
        listStyle: "none", // Kay-hayad les puces (•)
        gap: "20px", 
        margin: 0, 
        padding: 0 
      }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Accueil</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Profil</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;