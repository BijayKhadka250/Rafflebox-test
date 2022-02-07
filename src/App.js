import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar/navbar";
import ContentController from "./content/ContentController";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <ContentController />
      </div>
    </BrowserRouter>
  );
}

export default App;
