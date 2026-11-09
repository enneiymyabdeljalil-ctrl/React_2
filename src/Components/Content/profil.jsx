import Detail from './detail';
import Generale from './generale';
import Other from './other';

function ProfilPage() {
  return (
    <div style={{ 
      backgroundColor: "rgba(132, 146, 144, 1)", 
      padding: "30px 20px", 
      fontFamily: "sans-serif",
      minHeight: "100vh" // Bash l-background t-chdd l-écran kaml w mat-banch kahla
    }}>
      
      {/* 1. Titre dial la page */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ margin: "0", color: "#ffffff" }}>Student Profile Page Design Example</h1>
        <p style={{ color: "#d1e8e2", marginTop: "5px" }}>A responsive Student Profile Page</p>
      </div>

      {/* 2. Layout: Detail f l-lissar, Generale w Other f l-ymne wahed fawq wahed */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "25px", 
        maxWidth: "1000px", 
        margin: "0 auto",
        flexWrap: "wrap"
      }}>
        
        {/* L-Lissar */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <Detail />
        </div>

        {/* L-Lymne (Generale fawq, Other taht) */}
        <div style={{ flex: "1.5", display: "flex", flexDirection: "column", gap: "20px", minWidth: "300px" }}>
          <Generale />
          <Other />
        </div>

      </div>

    </div>
  );
}

export default ProfilPage;