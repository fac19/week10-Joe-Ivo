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
    // songInfo,
    songAudioFeatures,
    setAudioFeatures,
    setRecommendations,
    recommendations,
  } = props;
  const features = Object.keys(songAudioFeatures);
  const songInfo = { id: "407ltk0BtcZI8kgu0HH4Yj" }; // should be taken from search
  const authToken = "BQBEIjnxWwbNRdvkk4KOCUPYm4ZOl_zy-QviHtBai1iy_vdBRrNZ2qt7GmRhxtybkAyd1ZqzOM9UtvBAAVc"; // should be taken from login

  // React.useEffect(
    // () => {
    //   const requestOptions = {
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer " + authToken,
    //     },
    //   };

    //   fetch(
    //     `https://api.spotify.com/v1/audio-features/${songInfo.id}`,
    //     requestOptions
    //   )
    //     .then((res) => res.json())
    //     .then((res) => {
    //       const newAudioFeatures = { ...songAudioFeatures };
    //       newAudioFeatures.energy = res.energy.toPrecision(1);
    //       newAudioFeatures.tempo = Math.round(res.tempo);
    //       newAudioFeatures.valence = res.valence.toPrecision(1);
    //       newAudioFeatures.instrumentalness = res.instrumentalness.toPrecision(
    //         1
    //       );
    //       newAudioFeatures.speechiness = res.speechiness.toPrecision(1);
    //       newAudioFeatures.time_signature = res.time_signature.toPrecision(1);
    //       newAudioFeatures.danceability = res.danceability.toPrecision(1);
    //       setAudioFeatures(newAudioFeatures);
    //       // console.log(songAudioFeatures) // does update
    //     });
  //   },
  //   [
  //     /* songInfo */
  //   ]
  // );

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
