import React from "react";
import "./song-filter.css"

const maxValues = {
    quantity: 15,
    energy: 10,
    tempo: 10,
    valence: 10,
    instrumentalness: 10,
    speechiness: 10,
    timeSignature: 10,
    danceability: 10
}

function SongFilter(props) {
  const { songAudioFeatures, setAudioFeatures } = props;
  const features = Object.keys(songAudioFeatures)
  return (
    <form>
    {
        features.map(feature =>  (
        <label htmlFor={feature}>{songAudioFeatures[feature]} {feature} 
        <input 
            type="range"
            id={feature}
            min="0"
            max={maxValues[feature]}
            step="0.1"
            value={songAudioFeatures[feature]}
            onChange={e => {
                const newAudioFeatures = {...songAudioFeatures, [feature]: e.target.value}
                setAudioFeatures(newAudioFeatures)
            }}
        />
        </label>
        )
        )
    }
       <input type="submit" value="Search for recommendations" />
    </form>
  );
}

export default SongFilter;
