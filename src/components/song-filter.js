import React from "react";
import "./song-filter.css"
import getRecommendations from "../util/get-recommendations.js"

const maxValues = {
    quantity: 15,
    energy: 10,
    tempo: 10,
    valence: 10,
    instrumentalness: 10,
    speechiness: 10,
    time_signature: 10,
    danceability: 10
}

function SongFilter(props) {
  const { songAudioFeatures, setAudioFeatures, setRecommendations, recommendations } = props;
  const features = Object.keys(songAudioFeatures)
  const songInfo = {id: "407ltk0BtcZI8kgu0HH4Yj"}
  const authToken = "BQBonbSv7nFmirB3Xa850EvdkofRQukKmk_LwunwYp2YZ-Cv5MEKNgWF71Qg_oTD8AxrH2vBRkaV0EYPwBI"

  React.useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + authToken
        }
    }


    fetch(`https://api.spotify.com/v1/audio-features/${songInfo.id}`, requestOptions)
    .then(res => res.json())
    .then(res => {
        const newAudioFeatures = {...songAudioFeatures}
        newAudioFeatures.energy = res.energy
        newAudioFeatures.tempo = res.tempo
        newAudioFeatures.valence = res.valence
        newAudioFeatures.instrumentalness = res.instrumentalness
        newAudioFeatures.speechiness = res.speechiness
        newAudioFeatures.time_signature = res.time_signature
        newAudioFeatures.danceability = res.danceability
        setAudioFeatures(newAudioFeatures)
    })
  }, [songInfo])


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
       <input type="submit" value="Search for recommendations" onClick={(e) => {
           e.preventDefault()
         console.log("HELLO WORLD")
         getRecommendations(songInfo.id, songAudioFeatures, authToken).then(res => {
             console.log(res)
             setRecommendations(res)
             console.log(recommendations)
         })
    }
    } />
    </form>
  );
}

export default SongFilter;
