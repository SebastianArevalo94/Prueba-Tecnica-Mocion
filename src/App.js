import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import MainMovies from "./components/Movies/MainMovies";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/comics" element={<Main />} />
        <Route path="/movies" element={<MainMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
