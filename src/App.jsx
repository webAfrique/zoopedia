import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Footer from "./pages/Footer";
import { animals, birds } from "./animalsList";
import "./App.css";

const Header = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/animals">Animals {`(${animals.length})`}</Link>
      </h2>
      <h2>
        <Link to="/birds">Birds {`(${birds.length})`}</Link>
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
        <Route
          path="/animals"
          element={<Gallery collection={animals} collectionName={"animals"} />}
        />
        <Route
          path="/birds"
          element={<Gallery collection={birds} collectionName={"birds"} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
