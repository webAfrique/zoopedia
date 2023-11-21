import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="home">
      <div
        onClick={() => navigate("collection/animals")}
        className="menu-image"
      ></div>
      <div
        onClick={() => navigate("collection/birds")}
        className="menu-image"
      ></div>
    </main>
  );
};

export default Home;
