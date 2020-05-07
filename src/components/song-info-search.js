import React from "react";

function SongInfoSearch () {    

    // const [logInToken, setToken] = React.useState('');

    // const logInObject = {
    //     client_id: '70fae8bc50334fb6bb32a4b3bf1b9537',
    //     redirect_uri: 'https:%2F%2Fsleepy-gorge-44990.herokuapp.com%2F'
    //     // redirect_uri: 'https:%2F%2Flocalhost:3000%2F' // Cannot use http
    // }

    // let popup;
    // const login = () => {
    //     popup = window.open(`https://accounts.spotify.com/authorize?client_id=${logInObject.client_id}&response_type=token&redirect_uri=${logInObject.redirect_uri}&show_dialog=true`, 'Login with Spotify', 'width=400,height=300')

    //     // window.spotifyCallBack = (token) => { // This seems to be putting a function on the window?
    //     //     popup.close();
    //     //     console.log("SongInfoSearch -> token", token)
    //     // } 
    // }

    // ISSUE - Want to close the pop up window after some state change. Perhaps don't use pop up window... 
    
    // setInterval(() => {
    //     try {
    //         console.log(Math.random(), popup.location.href)
    //         var token = popup.location.href.split('?')[1].split('=')[1];
    //         if (token) {
    //             popup.close();
    //             setToken(token);
    //         }
    //         console.log("SongInfoSearch -> token", token)
    //     }
    //     catch(error) {console.log(error)} 
    // }, 5000);

    // React.useEffect(() => {
    //     console.log("I am mounted baby")
    //     // const token = window.location.hash.substr(1).split('&')[0].split("=")[1] || 'BQCdxEQAiwqgmBTPkKY7BTWhHiThRljSF-_TY7o6MkiS3Y6jLRVZrxRnZrokILtoArB0tS7DJIZ-T66D1jI';
    //     const token = null;
    //     console.log("SongInfoSearch -> token", token)       

    //     if(token) {            
    //         console.log("SongInfoSearch -> token", token)
    //         window.opener.spotifyCallBack(token); // We want to call the function on the parent window which will close popup
    //     }

    // }, [window.location]);

    // return (
    //     <button onClick={() => login()}>Login with Spotify: {logInToken}</button>
    // )
    return null
}

export default SongInfoSearch  