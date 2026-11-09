function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
      </div>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "25px",
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
        >
          <li>Accueil</li>
          <li>À propos</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;