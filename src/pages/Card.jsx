import { useState } from 'react'

const Card = ({ name }) => {
    const [ likes, setLikes ] = useState(0)
    const [ dislikes, setDislikes ] = useState(0)
    const [ isLiked, setIsLiked ] = useState(false)
    const [ isDisliked, setIsDisliked ] = useState(false)

    const handleLike = (event) => {
        if(isDisliked === true){ handleDislike()}
        if(isLiked === false){
            event.target.style.color = '#d9d9d9'
            setLikes(likes + 1)
            setIsLiked(true)
        }else {
            event.target.style.color = ''
            setLikes(likes - 1)
            setIsLiked(false)
        }
    }
    const handleDislike = (event) => {
        if(isDisliked === false){
            event.target.style.color = '#d9d9d9'
            setDislikes(dislikes + 1)
            setIsDisliked(true)
        }else {
            event.target.style.color = ''
            setDislikes(dislikes - 1)
            setIsDisliked(false)
        }
    }
    const randomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
                        <small className="thumbs-up-count">{() => randomNumber(0, 100)}</small>
                    </div>
                    <div className="thumbs-down">
                        <span onClick={handleDislike} className="material-symbols-outlined thumbs-down">
                            thumb_down
                        </span>
                        <small className="thumbs-down-count">{() => randomNumber(0, 100)}</small>
                    </div>
                </div>
                <span className="material-symbols-outlined close-btn">
                    close
                </span>
            </div>
        </div>
    )
}

export default Card