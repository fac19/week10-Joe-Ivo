function getSongProperties(songInfo, songAudioFeatures, setAudioFeatures, authToken){

        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + authToken.token,
          },
        };
  
        fetch(
          `https://api.spotify.com/v1/audio-features/${songInfo.id}`,
          requestOptions
        )
          .then((res) => res.json())    
          .then((res) => {
            const newAudioFeatures = {
                quantity: 5,
                energy: 0,
                tempo: 0,
                valence: 0,
                instrumentalness: 0,
                speechiness: 0,
                time_signature: 0,
                danceability: 0,
              }
            newAudioFeatures.energy = res.energy.toPrecision(1);
            newAudioFeatures.tempo = Math.round(res.tempo);
            newAudioFeatures.valence = res.valence.toPrecision(1);
            newAudioFeatures.instrumentalness = res.instrumentalness.toPrecision(
              1
            );
            newAudioFeatures.speechiness = res.speechiness.toPrecision(1);
            newAudioFeatures.time_signature = res.time_signature.toPrecision(1);
            newAudioFeatures.danceability = res.danceability.toPrecision(1);
            setAudioFeatures(newAudioFeatures);
          });
}

export default getSongProperties;