import React from "react";
import "./App.css";

import Results from "./components/results"
import SongFilter from "./components/song-filter.js"
import SongInfoSearch from "./components/song-info-search.js"
import LogIn from "./components/log-in.js"

function App() {
    const [songInfo, setSongInfo] = React.useState(null)
    const [songAudioFeatures, setAudioFeatures] = React.useState({
        quantity: 5,
        energy: 0,
        tempo: 0,
        valence: 0,
        instrumentalness: 0,
        speechiness: 0,
        time_signature: 0,
        danceability: 0
    })
    const [recommendations, setRecommendations] = React.useState(null)
    const [logInToken, setLogInToken] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Happy Days Song Search
          </a>
        </h1>
      </header>
      <main>
      <LogIn logInToken={logInToken} setLogInToken={setLogInToken}/>
      <SongInfoSearch />
      <SongFilter songInfo={songInfo} songAudioFeatures={songAudioFeatures} setAudioFeatures={setAudioFeatures} setRecommendations={setRecommendations}/>
      <Results />
      </main>
    </div>
  );
}

export default App;
