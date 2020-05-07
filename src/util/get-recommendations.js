function getRecommendations(id, features, auth) {
    const featureKeys = Object.keys(features).filter(el => el !== "quantity")
    const featureParams = featureKeys.map(feature => "&target_" + feature + "=" + features[feature]).join("")
    const queryString = `?seed_tracks=${id}${featureParams}&limit=${Math.round(Number(features.quantity))}`
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + auth
        }
    }
    return fetch("https://api.spotify.com/v1/recommendations" + queryString, fetchOptions)
    .then(res => {
        if (res.status !== 200) {
            // do something
        }
        return res.json()
    })
    // .then(res => console.log(res))
    .then(response => {
        console.log(response)
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


// getRecommendations(id, features, authToken).then(res => console.log(res))


export default getRecommendations


// let id = "407ltk0BtcZI8kgu0HH4Yj"
// let authToken = "BQDhYgNTXUsiuxbCWuBzplL7FD0zNTeKiMn0JQ2eOoLxA974tnYo05djwYJdWIwZI03-0S1Z3oo5mDChYhU"
// let features = {
//     quantity: 5,
//     energy: 0,
//     tempo: 0,
//     valence: 0,
//     instrumentalness: 0,
//     speechiness: 0,
//     time_signature: 0,
//     danceability: 0
// }
