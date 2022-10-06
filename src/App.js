import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import vectorDots from "./assets/vectors/vctr-dots.svg";
import serviceBg from "./assets/vectors/service-bg.svg";
import HomePage from "./pages/home_page";
import HeaderNavbar from "./components/header_navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="decor-vector-1">
          <img src={vectorDots} alt=""></img>
        </div>
        <div className="decor-vector-2">
          <img src={serviceBg} alt=""></img>
        </div>
        <HeaderNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
