import './SaveButton.css';
import { useState } from "react";
import save from '../../../images/save.png'


function SaveButton({cardData}) {

  const handleSaveButton = () => {
    alert("Opening shareable link: \n" + cardData.url);
    window.open( 
      cardData.url, "_blank");
  }
  
  return (
    <div className="SaveButton" onClick={handleSaveButton}>
        <img src={save} className="SaveButton-image" alt="save-image"/>
    </div>
  );
}

export default SaveButton;