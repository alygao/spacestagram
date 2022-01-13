import './LikeButton.css';
import { useState } from "react";
import unlikedIcon from '../../../images/unliked.png';
import likedIcon from '../../../images/liked.png'


function LikeButton({cardData}) {
    const savedInStorage = localStorage.getItem(cardData.date) ?? null;
    const initialLikedValue = savedInStorage === 'liked';
    const [liked, setLiked] = useState(initialLikedValue);

    const handleLikeButton = () => {
        setLiked(!liked);
        liked
        ? localStorage.setItem(cardData.date, "unliked")
        : localStorage.setItem(cardData.date, "liked");
    }
    return (
        <div className="LikeButton" onClick={handleLikeButton}>
            <img src={!liked ? unlikedIcon : likedIcon}  className="LikeButton-image" alt="like/unlike-icon"/>
        </div>
    );
}

export default LikeButton;