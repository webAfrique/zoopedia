import { useState } from "react";

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getInfo = async () => {
  try {
    const response = await fetch("/wiki");
    const data = await response.json();
    console.log(data);
    /*  const pagesObj = data.query.pages;
    console.log(pagesObj)
    const responsePage = Object.keys(pagesObj)[0];
    const summary = pagesObj[responsePage].extract; */
    //console.log(summary);
  } catch (error) {
    console.log("error dey inside", error.message);
  }
};
getInfo();

const Card = ({ name, deleteCard }) => {
  const [likes, setLikes] = useState(randomNumber(0, 100));
  //const [ info, setInfo ] = useState('')
  const [dislikes, setDislikes] = useState(randomNumber(0, 100));
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked === false) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };
  const handleDislike = () => {
    if (isDisliked === false) {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
    } else {
      setDislikes(dislikes - 1);
      setIsDisliked(false);
    }
  };

  return (
    <div className="card">
      <p>{name}</p>
      <div className="card-buttons">
        <div className="reaction">
          <div className="thumbs-up">
            <span onClick={handleLike} className="material-symbols-outlined">
              thumb_up
            </span>
            <small className="thumbs-up-count">{likes}</small>
          </div>
          <div className="thumbs-down">
            <span
              onClick={handleDislike}
              className="material-symbols-outlined thumbs-down"
            >
              thumb_down
            </span>
            <small className="thumbs-down-count">{dislikes}</small>
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
//<img src={`https://source.unsplash.com/400x400/?${name}`} alt="unsplash random image" />
