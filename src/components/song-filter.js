import React from "react";
import "./song-filter.css";
import getRecommendations from "../util/get-recommendations.js";

const maxValues = {
  quantity: 15,
  energy: 1,
  tempo: 300,
  valence: 1,
  instrumentalness: 10,
  speechiness: 1,
  time_signature: 10, // Does this even come through as an integer?
  danceability: 1,
};

const displayNames = {
  tempo: "BPM",
  time_signature: "time signature",
};

const stepAdjustments = {
  tempo: 1,

};

function SongFilter(props) {
  const {
    songInfo,
    songAudioFeatures,
    setAudioFeatures,
    setRecommendations,
    logInToken
  } = props;
  const features = Object.keys(songAudioFeatures);

  const authToken = logInToken

  return (
    <form>
      {features.map((feature, i) => (
        <label key={i} htmlFor={feature}>
          {songAudioFeatures[feature]} {displayNames[feature] || feature}
          <input
            type="range"
            id={feature}
            min="0"
            max={maxValues[feature]}
            step={stepAdjustments[feature] || 0.01}
            value={songAudioFeatures[feature]}
            onChange={(e) => {
              const newAudioFeatures = {
                ...songAudioFeatures,
                [feature]: e.target.value,
              };
              setAudioFeatures(newAudioFeatures);
              console.log(songAudioFeatures);
            }}
          />
        </label>
      ))}
      <input
        type="submit"
        value={"Search for recommendations"}
        onClick={(event) => {
          event.preventDefault();
          getRecommendations(songInfo.id, songAudioFeatures, authToken).then(
            (res) => {
              setRecommendations(res);
            }
          );
        }}
      />
    </form>
  );
}

export default SongFilter;
