import './SaveButton.css';
import save from '../../../images/save.png'


function SaveButton({cardData}) {

  const handleSaveButton = () => {
    alert("Opening shareable link: \n" + cardData.url);
    window.open( 
      cardData.url, "_blank");
  }
  
  return (
    <button className="SaveButton" onClick={handleSaveButton} aria-label="Save">
        <img src={save} className="SaveButton-image" alt="Save icon"/>
    </button>
  );
}

export default SaveButton;