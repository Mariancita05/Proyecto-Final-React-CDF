import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className=" bgApp">
      <div className="container-app">
        <h1 className="  titulo">LOS SIMPSONS</h1>
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/randomCharacter"
        >
          <button className="btn-personajes">PERSONAJES</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
