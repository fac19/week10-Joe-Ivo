# Happy Days Song Search :musical_score: 
## week10-Joe-Ivo

## Description
This is an app where you can get song recommendations based on audio features such as tempo, energy, danceability and speechiness. You can find a list of all possible features [here](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/).

To use the website,

1. Login and get cookie from Spotify
2. Search for a track with track name and artist
3. This will populate the song feature sliders based on the selected song (change them based on your mood!)
4. Hit 'Search for recommendations' button to get tracks that match the audio features

## Reviewers!
Please review the [deployed version](https://stoic-hoover-c4bfbc.netlify.app/) due to the issue mentioned in the [Local Deployment](#Local-Deployment) section.

### Please help answer these questions
1. Originally, when you searched a song, the sliders appeared at the right values. However, as we responded to new challenges something got lost, and this doesn't work any more but we aren't sure why.
2. You cannot use `.then()` promise chains in an onSubmit event like on line 31 of song-info-search.js. Why is this?

```javascript=31
<form onSubmit={(event) => handleSearchTrack(event, trackSearch, token, setSongInfo, songInfo, songAudioFeatures, setAudioFeatures)}
```

## Notes on Authentication
We are using the [Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) authentication method from Spotify to aquire a token.

## Local Deployment 
Because of how the Spotify authentication system works, it isn't currently possible to deploy locally unless you change your code, namely by making an access token available some other way.

We actually wrote a little server that serves tokens before we decided to go with the login-auth method (because it's cooler), so if you want a token you can just hit this [url](https://sleepy-gorge-44990.herokuapp.com/). The server doesn't support CORS.

Also be aware that tokens only last an hour - if things that were working suddenly break, it's probably that.

## Project set up (if you want to run locally)
1. Clone this repo
2. Run `npm i` 
3. Run `npm start`


## The API routes we used
Using an access token, we plan for our app to use these routes:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7d5a46dd4706a7d63f81)


## React stuff:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console
