import { useState } from 'react'

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ name, deleteCard }) => {
    const [ likes, setLikes ] = useState(randomNumber(0, 100))
    const [ dislikes, setDislikes ] = useState(randomNumber(0, 100))
    const [ isLiked, setIsLiked ] = useState(false)
    const [ isDisliked, setIsDisliked ] = useState(false)

    const handleLike = () => {
        if(isLiked === false){
            setLikes(likes + 1)
            setIsLiked(true)
        }else {
            setLikes(likes - 1)
            setIsLiked(false)
        }
    }
    const handleDislike = () => {
        if(isDisliked === false){
            setDislikes(dislikes + 1)
            setIsDisliked(true)
        }else {
            setDislikes(dislikes - 1)
            setIsDisliked(false)
        }
    }
   
    return (
        <div className="card">
            <img src={`https://source.unsplash.com/400x400/?${name}`} alt="unsplash random image" />
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
                        <span onClick={handleDislike} className="material-symbols-outlined thumbs-down">
                            thumb_down
                        </span>
                        <small className="thumbs-down-count">{dislikes}</small>
                    </div>
                </div>
                <span onClick={()=>deleteCard(name)} className="material-symbols-outlined close-btn">
                    close
                </span>
            </div>
        </div>
    )
}

export default Card