import React from "react";

function SongInfoSearch () {
    const logInObject = {
        client_id: '70fae8bc50334fb6bb32a4b3bf1b9537',
        redirect_uri: 'https:%2F%2Fsleepy-gorge-44990.herokuapp.com%2F'
        // redirect_uri: 'https:%2F%2Flocalhost:3000%2F' // Cannot use http
    }

    const login = () => {
        let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${logInObject.client_id}&response_type=token&redirect_uri=${logInObject.redirect_uri}&show_dialog=true`, 'Login with Spotify', 'width=400,height=300')

        window.spotifyCallBack = (token) => { // This seems to be putting a function on the window?
            popup.close();
            console.log("SongInfoSearch -> token", token)
        } 
    }

    // ISSUE - Want to close the pop up window after some state change. Perhaps don't use pop up window... 

    React.useEffect(() => {
        console.log("I am mounted baby")
        const token = window.location.hash.substr(1).split('&')[0].split("=")[1] || 'BQCdxEQAiwqgmBTPkKY7BTWhHiThRljSF-_TY7o6MkiS3Y6jLRVZrxRnZrokILtoArB0tS7DJIZ-T66D1jI';
        console.log("SongInfoSearch -> token", token)       

        if(token) {            
            console.log("SongInfoSearch -> token", token)
            window.opener.spotifyCallBack(token); // We want to call the function on the parent window which will close popup
        }

    }, []);

    return (
        <button onClick={() => login()}>Login with Spotify</button>
    )
}

export default SongInfoSearch  