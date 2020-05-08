import React from "react";
import "./App.css";

import Results from "./components/results";
import SongFilter from "./components/song-filter.js";
import SongInfoSearch from "./components/song-info-search.js";
import LogIn from "./components/log-in.js";
import RenderSong from "./components/RenderSong"
import { validExp } from "./util/valid-exp";

function App() {
  const [songInfo, setSongInfo] = React.useState(null);
  const [songAudioFeatures, setAudioFeatures] = React.useState({
    quantity: 5,
    energy: 0,
    tempo: 0,
    valence: 0,
    instrumentalness: 0,
    speechiness: 0,
    time_signature: 0,
    danceability: 0,
  });
  const [recommendations, setRecommendations] = React.useState([]);
  const [logInToken, setLogInToken] = React.useState("");
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
            Happy Days Song Search
          </a>
        </h1>
      </header>
      <main>
        {logInToken ? (
          <p>Access token aquired. Please search an artist and track</p>
        ) : (
          <LogIn logInToken={logInToken} setLogInToken={setLogInToken} />
        )}

        <SongInfoSearch
          logInToken={logInToken}
          songInfo={songInfo}
          songAudioFeatures={songAudioFeatures}
          setAudioFeatures={setAudioFeatures}
          setSongInfo={setSongInfo}
        />

        {songInfo ? <RenderSong song=songInfo/> : ""}

        {songInfo ? (
          <SongFilter
            logInToken={logInToken}
            songInfo={songInfo}
            songAudioFeatures={songAudioFeatures}
            setAudioFeatures={setAudioFeatures}
            setRecommendations={setRecommendations}
            recommendations={recommendations}
          />
        ) : (
          ""
        )}

        <Results recommendations={recommendations} />
      </main>
    </div>
  );
}

export default App;
