import './Card.css';
import { useState } from "react";
import LikeButton from '../Buttons/LikeButton/LikeButton';
import SaveButton from '../Buttons/SaveButton/SaveButton';

function Card({cardData}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsButton = () => {
    setShowDetails(!showDetails);
  }

  return (
    <div className="Card">
      {cardData.media_type ==='image' 
      ? <img src={cardData.url} className="Card-image" alt="Missing URL for APOD media"/> 
      : <iframe title={cardData.title} className="Card-image" alt="Missing URL for APOD media"
        src={cardData.url}>
        </iframe>
      }
      <div className="Card-buttons">
        <div className="Card-leftbuttons">
          <LikeButton cardData={cardData}/>
          <SaveButton cardData={cardData}/>
        </div>
        <button className="Card-showdetails" onClick={handleDetailsButton} aria-label="Show/Hide Details" >
          {!showDetails ? "Show Details" : "Hide Details"}
        </button>
      </div>
      <div className="Card-info">
        <p className="Card-title">{cardData.title}</p>
        <p className="Card-date">{cardData.date}</p>
        {showDetails && 
          <p className="Card-details">
            {cardData.explanation}
          </p>
        }
      </div>
    </div>
  );
}

export default Card;