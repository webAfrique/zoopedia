import { useState } from 'react'
const Card = () => {
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
    return (
        <div className="card">
            <div className="card-image"></div>
            <p>Animal name</p>
            <div className="card-buttons">
                <div className="reaction">
                    <div className="thumbs-up">
                        <span onClick={handleLike} className="material-symbols-outlined">
                            thumb_up
                        </span>
                        <small className="thumbs-up-count">{likes ? likes : null}</small>
                    </div>
                    <div className="thumbs-down">
                        <span onClick={handleDislike} className="material-symbols-outlined thumbs-down">
                            thumb_down
                        </span>
                        <small className="thumbs-down-count">{dislikes ? dislikes : null}</small>
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