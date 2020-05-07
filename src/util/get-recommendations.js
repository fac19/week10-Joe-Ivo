function getRecommendations(id, features, auth) {
    const featureKeys = Object.keys(features).filter(el => el !== "quantity")
    const featureParams = featureKeys.map(feature => "&target_" + feature + "=" + features[feature]).join("")
    const queryString = `?seed_tracks=${id}${featureParams}&limit=${features.quantity}`
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + auth
        }
    }

    return fetch("https://api.spotify.com/v1/recommendations" + queryString, fetchOptions)
    .then(res => res.json())
    .then(response => {
        return response.tracks.map((track) => {
            return {
                album: {
                    name: track.album.name,
                    year: track.album.release_date,
                    image: track.album.images[1] || track.album.images[0]
                },
                artists: track.artists.map(artist => artist.name),
                url: track.external_urls.spotify,
                name: track.name            
            }
        })
    })
}


getRecommendations(id, features, authToken)


export default getRecommendations


// let id = "407ltk0BtcZI8kgu0HH4Yj"
// let authToken = "BQADT3N5U4JpHzUgRxSQrQCMJaM7WyqjqYicJPKmvcZ3tGZXoWPQwSsQmFgzqrju3XG9l55-b2P6-gv65hc"
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


https://api.spotify.com/v1/recommendations?seed_tracks407ltk0BtcZI8kgu0HH4Yj&target_energy=0&target_tempo=0&target_valence=0&target_instrumentalness=0&target_speechiness=0&target_timeSignature=0&target_danceability=0
