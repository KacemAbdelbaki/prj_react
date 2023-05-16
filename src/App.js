import "./App.css";
import Nav from "./components/NavBarLivre";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <center>
        <Nav />
        <Outlet />
      </center>
    </div>
  );
}

export default App;
