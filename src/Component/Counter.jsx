import { useState } from "react";
import Valeur from "./Valeur";

function Counter() {
  const [count, setCount] = useState(0);

  let StyleShet = {
    backgroundColor: "#50dc0bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "15px",
    margin: "10px",
  };
  let StyleShett = {
    backgroundColor: "#0b23dcff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "15px",
    margin: "10px",
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        maxWidth: "500px",
        margin: "40px auto",
      }}
    >
      <h1>Mon compteur</h1>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f5f9",
          borderRadius: "10px",
        }}
      >
        <Valeur Valeurs={count} />
      </div>

      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Incrémenter
      </button>

      <button
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
      >
        Décrémenter
      </button>

      <button
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(0)}
      >
        Réinitialiser
      </button>
      <div>
        <fieldset>
          <legend>Pas Décrémenter</legend>

          <button
            style={StyleShett}
            ptype="Sumbit"
            onClick={() => setCount(count + 3)}
          >
            +3
          </button>
          <button
            style={StyleShett}
            type="Sumbit"
            onClick={() => setCount(count + 5)}
          >
            +5
          </button>
          <button
            style={StyleShett}
            type="Sumbit"
            onClick={() => setCount(count + 6)}
          >
            +6
          </button>
          <button
            style={StyleShett}
            type="Sumbit"
            onClick={() => setCount(count + 10)}
          >
            +10
          </button>
          <button
            style={StyleShett}
            type="Sumbit"
            onClick={() => setCount(count + 15)}
          >
            +15
          </button>
        </fieldset>
      </div>

      <div>
        <fieldset>
          <legend>Pas Incrémenter</legend>
          <button
            style={StyleShet}
            type="Sumbit"
            onClick={() => setCount(count - 3)}
          >
            - 3
          </button>
          <button
            style={StyleShet}
            type="Sumbit"
            onClick={() => setCount(count - 5)}
          >
            - 5
          </button>
          <button
            style={StyleShet}
            type="Sumbit"
            onClick={() => setCount(count - 6)}
          >
            - 6
          </button>
          <button
            style={StyleShet}
            type="Sumbit"
            onClick={() => setCount(count - 10)}
          >
            - 10
          </button>
          <button
            style={StyleShet}
            type="Sumbit"
            onClick={() => setCount(count - 15)}
          >
            - 15
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default Counter;
