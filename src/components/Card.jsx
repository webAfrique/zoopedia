import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, likes, dislikes, deleteCard }) => {
  const [likesCount, setLikesCount] = useState(likes);
  //const [info, setInfo] = useState("");
  const [dislikesCount, setDislikesCount] = useState(dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  //const navigate = useNavigate();

  /*  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`
      );
      const data = await response.json();
      const extract = data.extract;
      const offset = extract.indexOf(".");
      const summary = extract.slice(0, offset + 1);
      extract ? setInfo(summary) : setInfo("no summary");
    } catch (error) {
      console.log("error dey inside", error.message);
    }
  }; */

  const handleLike = () => {
    if (isLiked === false) {
      setLikesCount(likesCount + 1);
      setIsLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
    }
  };
  const handleDislike = () => {
    if (isDisliked === false) {
      setDislikesCount(dislikesCount + 1);
      setIsDisliked(true);
    } else {
      setDislikesCount(dislikesCount - 1);
      setIsDisliked(false);
    }
  };

  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt="unsplash random image"
      />

      <Link to={`/article/${name}`}>{name}</Link>

      <div className="card-buttons">
        <div className="reaction">
          <div className="thumbs-up">
            <span onClick={handleLike} className="material-symbols-outlined">
              thumb_up
            </span>
            <small className="thumbs-up-count">{likesCount}</small>
          </div>
          <div className="thumbs-down">
            <span
              onClick={handleDislike}
              className="material-symbols-outlined thumbs-down"
            >
              thumb_down
            </span>
            <small className="thumbs-down-count">{dislikesCount}</small>
          </div>
        </div>
        <span
          onClick={() => deleteCard(name)}
          className="material-symbols-outlined close-btn"
        >
          close
        </span>
      </div>
    </div>
  );
};

export default Card;

/* <img
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt="unsplash random image"
      />

      onClick={() => navigate(`/article/${name}`)}
      
*/
