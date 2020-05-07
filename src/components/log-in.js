import React from "react";
import {relativeToAbsoluteTime} from "../util/valid-exp";

function LogIn(props) {
  const { logInToken, setLogInToken } = props;
  let popup = undefined;

    React.useEffect(() => {
        setInterval(checkUrl, 3000);
    }, [])

    const logInObject = {
      client_id: "70fae8bc50334fb6bb32a4b3bf1b9537",
      redirect_uri: 'https:%2F%2Fstoic-hoover-c4bfbc.netlify.app'
    //   redirect_uri: "https:%2F%2Fsleepy-gorge-44990.herokuapp.com%2F",
    };

  return (
    <div>
      <button onClick={() => login()}>Login with Spotify:</button>
      <p>This is your access token: {logInToken.token}</p>
    </div>
  );

  function login() {
    popup = window.open(
    //   `http://localhost:5000/spotify`,
      `https://accounts.spotify.com/authorize?client_id=${logInObject.client_id}&response_type=token&redirect_uri=${logInObject.redirect_uri}&show_dialog=true`,
      "Login with Spotify",
      "width=400,height=300"
    );
  }

  function checkUrl() {
    try {
      var token = popup.location.href.split("#")[1].split("&")[0].split("=")[1];
    //   console.log("checkUrl -> token", token)
      if (token) {
        popup.close();
        const obj = {token: token, expiry: relativeToAbsoluteTime()}        
        // console.log("checkUrl -> obj", obj)
        // console.log(typeof setLogInToken)
        setLogInToken(obj);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default LogIn;
