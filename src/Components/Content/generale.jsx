function Generale() {
  return (
    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
      <h3>General Information</h3>
      
      {/* Table s-sahla bach t-dir l-ma3loumat wahed hda wahed */}
      <table style={{ width: "100%" }}>
        <tr>
          <td><b>Roll</b></td>
          <td>:</td>
          <td>125</td>
        </tr>
        <tr>
          <td><b>Academic Year</b></td>
          <td>:</td>
          <td>2020</td>
        </tr>
        <tr>
          <td><b>Gender</b></td>
          <td>:</td>
          <td>Male</td>
        </tr>
        <tr>
          <td><b>Religion</b></td>
          <td>:</td>
          <td>Group</td>
        </tr>
        <tr>
          <td><b>Blood</b></td>
          <td>:</td>
          <td>B+</td>
        </tr>
      </table>
    </div>
  );
}

export default Generale;