import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <Link to="/collection/animals" className="menu-image" />
      <Link to="/collection/birds" className="menu-image" />
    </main>
  );
};

export default Home;
