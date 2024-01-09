import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Article = () => {
  const { animalName } = useParams();
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${animalName}`
      );
      const data = await response.json();
      const description = data.description;
      const extract = data.extract;
      setInfo({ description, extract });
    } catch (error) {
      console.log("error dey inside", error.message);
    }
  };

  fetchInfo();

  return (
    <main className="about">
      <img
        src={`https://source.unsplash.com/400x400/?${animalName}`}
        className="about-image"
      />
      <div className="about-text">
        <span
          onClick={() => navigate(-1)}
          className="material-symbols-outlined"
        >
          arrow_back
        </span>
        <h2>{animalName}</h2>
        <h4>{info.description}</h4>
        <p>{info.extract}</p>
      </div>
    </main>
  );
};

export default Article;
