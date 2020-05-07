function getRecommendations(id, features, auth) {
    const featureKeys = Object.keys(features).filter(el => el !== "quantity")
    const featureParams = featureKeys.map(feature => "&target_" + feature + "=" + features[feature]).join("")
    const queryString = `?seed_tracks=${id}${featureParams}&limit=${Math.round(Number(features.quantity))}`
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + auth.token
        }
    }
    return fetch("https://api.spotify.com/v1/recommendations" + queryString, fetchOptions)
    .then(res => {
        if (res.status !== 200) {
            // do something
        }
        return res.json()
    })
    .then(response => {
        if (!response || !response.tracks) { 
            // do the same thing you did above
        }

        return response.tracks.map((track) => {
            return {
                album: {
                    name: track.album.name,
                    year: track.album.release_date,
                    image: track.album.images[1].url || track.album.images[0].url
                },
                artists: track.artists.map(artist => artist.name),
                url: track.external_urls.spotify,
                name: track.name            
            }
        })
    })
    .catch((err) => console.log(err))
}



export default getRecommendations
