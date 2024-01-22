import { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const ref = useRef();

  function handleScroll(event) {
    event.preventDefault();
    ref.current.scrollLeft += event.deltaY;

    if (event.target.id === "scroll-left") {
      ref.current.scrollLeft -= 600;
    } else if (event.target.id === "scroll-right") {
      ref.current.scrollLeft += 600;
    }
  }
  return (
    <div className="home">
      <span
        className="material-symbols-outlined ios-arrow-icon"
        id="scroll-left"
        onClick={handleScroll}
        onWheel={handleScroll}
      >
        arrow_back_ios
      </span>
      <div ref={ref} className="carousel">
        <Link to="/collection/mammals" className="menu-image">
          <img
            src="https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg?cs=srgb&dl=pexels-ahmed-galal-12004890.jpg&fm=jpg"
            alt="lion"
          />
        </Link>
        <Link to="/collection/birds" className="menu-image">
          <img
            src="https://media.istockphoto.com/id/495292220/photo/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-background.jpg?s=612x612&w=0&k=20&c=UUgfaSISnRJOGQfmzsUQyWIo_RFWHe3JPBmO3K3E6LA="
            alt="toucan"
          />
        </Link>

        <Link to="/collection/fish" className="menu-image">
          <img
            src="https://img.freepik.com/premium-photo/red-blue-fish-with-black-background_25996-6461.jpg"
            alt="fish"
          />
        </Link>

        <Link to="/collection/reptiles" className="menu-image">
          <img
            src="https://t4.ftcdn.net/jpg/04/02/73/37/360_F_402733739_ubJaL7v2tT56wUpKjBFbFrtKTUWA5fHp.jpg"
            alt="salamander"
          />
        </Link>
        <Link to="/collection/insects" className="menu-image">
          <img
            src="https://i.pinimg.com/736x/09/c8/30/09c830bc4d5b618a3aea85704a1e15fe.jpg"
            alt="grasshopper"
          />
        </Link>
      </div>
      <span
        className="material-symbols-outlined ios-arrow-icon"
        id="scroll-right"
        onClick={handleScroll}
        onWheel={handleScroll}
      >
        arrow_forward_ios
      </span>
    </div>
  );
};

export default Home;
