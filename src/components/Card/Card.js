import './Card.css';
import { useState } from "react";
import mock from '../../images/mock.png'
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
      ? <img src={cardData.url} className="Card-image" alt="card-image"/> 
      : <iframe className="Card-image" alt="card-video"
        src={cardData.url}>
        </iframe>
      }
      <div className="Card-buttons">
        <div className="Card-leftbuttons">
          <LikeButton cardData={cardData}/>
          <SaveButton cardData={cardData}/>
        </div>
        <div className="Card-showdetails" onClick={handleDetailsButton}>
          {!showDetails ? "Show Details" : "Hide Details"}
        </div>
      </div>
      <div className="Card-info">
        <h4 className="Card-title">{cardData.title}</h4>
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