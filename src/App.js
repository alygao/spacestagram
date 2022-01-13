import './App.css';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SolarSystem/>
        <h1>spacetagram</h1>
        <h3>Imitating a social media feed, this webpage retrieves the most recent 14 Astronomy Pictures of the Day (APOD) from the <a href="https://api.nasa.gov/">NASA API</a>.</h3>
        <a href="https://github.com/alyssagao1120/spacestagram">view source code</a>
        <a href="https://alyssagao.me/">made by Alyssa Gao</a>
        <Feed/>
      </header>
    </div>
  );
}

export default App;
