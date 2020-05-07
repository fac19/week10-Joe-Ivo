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
  const songInfo = {id: "407ltk0BtcZI8kgu0HH4Yj"}
  const authToken = 

  React.useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: "Bearer BQBi4DXT7PXV73Ip1JpAvDRtTfc1b0qficSvEPnxrHgI-1bA8ilpuBpu-DG3OdkuUwAjKk4tzvSVUozVqSM"
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
        newAudioFeatures.timeSignature = res.time_signature
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
       <input type="submit" value="Search for recommendations" />
    </form>
  );
}

export default SongFilter;
