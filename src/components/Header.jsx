import { Link } from "react-router-dom";

const Header = ({ collections }) => {
  return (
    <header>
      <h1 className="zoo-text">
        zoopedia <span className="square-dot">&#9632;</span>
        <span className="monochrome-text">monochrome</span>
      </h1>
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
    </header>
  );
};

export default Header;
