import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Article from "./pages/Article";
import About from "./pages/About";
import Footer from "./pages/Footer";
import collections from "./animalsList";
import "./App.css";

const Header = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/collection/animals">
          Animals {`(${collections.animals.length})`}
        </Link>
      </h2>
      <h2>
        <Link to="/collection/birds">
          Birds {`(${collections.birds.length})`}
        </Link>
      </h2>
      <h2>
        <Link to="/about">About</Link>
      </h2>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:collectionName" element={<Gallery />} />
        <Route path="/article/:animalName" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
