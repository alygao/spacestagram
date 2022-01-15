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
        <button className="LikeButton" onClick={handleLikeButton} aria-label="Like/Unlike">
            <img src={!liked ? unlikedIcon : likedIcon}  className="LikeButton-image" alt="Like/Unlike icon"/>
        </button>
    );
}

export default LikeButton;