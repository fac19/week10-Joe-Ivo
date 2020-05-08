import React from "react";
import {relativeToAbsoluteTime} from "../util/valid-exp";
import "./render-song.css"

function LogIn(props) {
  const { logInToken, setLogInToken } = props;
//   const popup = React.useRef(null);
  let popup = {};

    React.useEffect(() => {
        setInterval(checkUrl, 500);
    }, [])

    const logInObject = {
      client_id: "70fae8bc50334fb6bb32a4b3bf1b9537",
      redirect_uri: 'https:%2F%2Fstoic-hoover-c4bfbc.netlify.app'
    };

  return (
    <div>
      <button className="custom-button" onClick={() => login()}>Login with Spotify</button>
    </div>
  );

  function login() {

    popup = window.open(

      `https://accounts.spotify.com/authorize?client_id=${logInObject.client_id}&response_type=token&redirect_uri=${logInObject.redirect_uri}&show_dialog=true`,
      "Login with Spotify",
      "width=600,height=700"
    );
  }

  function checkUrl() {
    try {
      var token = popup.location.href.split("#")[1].split("&")[0].split("=")[1];
      if (token) {
        popup.close();
        const obj = {token: token, expiry: relativeToAbsoluteTime()}        
        setLogInToken(obj);
      }
    } catch (error) {
    }
  }
}

export default LogIn;
