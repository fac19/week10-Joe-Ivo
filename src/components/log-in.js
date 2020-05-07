import React from "react";

function LogIn (props) => {
    const logInObject = {
        client_id: '70fae8bc50334fb6bb32a4b3bf1b9537',
        redirect_uri: 'https:%2F%2Fstoic-hoover-c4bfbc.netlify.app%2F'
    }

    let popup;
    const login = () => {
        popup = window.open(`https://accounts.spotify.com/authorize?client_id=${logInObject.client_id}&response_type=token&redirect_uri=${logInObject.redirect_uri}&show_dialog=true`, 'Login with Spotify', 'width=400,height=300')
    }
    
    setInterval(() => {
        try {
            console.log(Math.random(), popup.location.href)
            var token = popup.location.href.split('?')[1].split('=')[1];
            if (token) {
                popup.close();
                setToken(token);
            }
            console.log("SongInfoSearch -> token", token)
        }
        catch(error) {console.log(error)} 
    }, 1000);
 
    

    return (
        <button onClick={() => login()}>Login with Spotify: {logInToken}</button>
    )
}

export default LogIn