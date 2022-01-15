import './SaveButton.css';
import save from '../../../images/save.png'


function SaveButton({cardData}) {

  const handleSaveButton = () => {
    alert("Opening shareable link: \n" + cardData.url);
    window.open( 
      cardData.url, "_blank");
  }
  
  return (
    <div className="SaveButton" onClick={handleSaveButton} role="button">
        <img src={save} className="SaveButton-image" alt="save icon"/>
    </div>
  );
}

export default SaveButton;