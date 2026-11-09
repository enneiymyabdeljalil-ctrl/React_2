function Detail() {
  return (
    <div style={{
        backgroundColor: "#ffffff", // Lon abyad bhal l-tswira
        padding: "25px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        textAlign: "center" // Bach l-trivwa w smit t-jii f wasst
      }}>
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%", // Bach t-wlli tswira dayra bhal circle
          objectFit: "cover"
        }}
      />

      <h2 style={{ margin: "15px 0 10px 0", fontSize: "20px" }}>Ronaldo CR7</h2>
      <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "15px 0" }} />
      
      <div style={{ textAlign: "left" }}>
        <p><b>Student ID:</b> 321000001</p>
        <p><b>Classe:</b> 4</p>
        <p><b>Section:</b> A</p>
      </div>
    </div>
  );
}

export default Detail;