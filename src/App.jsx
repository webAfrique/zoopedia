import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Article from "./components/Article";
import About from "./components/About";
import Footer from "./components/Footer";
import collections from "./animalsList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header collections={collections} />
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
