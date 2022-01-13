import sun from '../../images/sun.png';
import earth from '../../images/earth.png';
import pluto from '../../images/pluto.png';
import './SolarSystem.css';

function SolarSystem() {
  return (
    <div className="SolarSystem">
        <img src={pluto} className="SolarSystem-image SolarSystem-pluto" alt="pluto" />
        <img src={sun} className="SolarSystem-image SolarSystem-sun" alt="sun" />
        <img src={earth} className="SolarSystem-image SolarSystem-earth" alt="earth" />
    </div>
  );
}

export default SolarSystem;