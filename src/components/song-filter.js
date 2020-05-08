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
//   time_signature: 10, // Does this even come through as an integer?
  danceability: 1,
};

const descriptions = {
  quantity: "Select number of tracks",
  energy: "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.",
  valence: "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).",
  tempo: "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.",
  instrumentalness: "Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.",
  speechiness: "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.",
//   time_signature: "An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).",
  danceability: "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable."
} 

const displayNames = {
  tempo: "BPM",
  time_signature: "time signature",
};

const stepAdjustments = {
  tempo: 1,
  quantity: 1
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
      <h2>Audio Features</h2>
      <p>Now tune the search to your mood!</p>
      {features.map((feature, i) => (
        <label key={i} title={descriptions[feature]} htmlFor={feature}>
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
        className="recommendations-button"
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
