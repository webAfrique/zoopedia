import { Link } from "react-router-dom";

const Header = ({ collections }) => {
  return (
    <header>
      <h1>zoopedia</h1>
      <nav>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/collection/mammals">
            Mammals {`(${collections.mammals.length})`}
          </Link>
        </h2>
        <h2>
          <Link to="/collection/birds">
            Birds {`(${collections.birds.length})`}
          </Link>
        </h2>
        <h2>
          <Link to="/collection/fish">
            Fish {`(${collections.fish.length})`}
          </Link>
        </h2>
        <h2>
          <Link to="/collection/reptiles">
            Reptiles {`(${collections.reptiles.length})`}
          </Link>
        </h2>
        <h2>
          <Link to="/collection/insects">
            Insects {`(${collections.insects.length})`}
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
