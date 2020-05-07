import React from "react";
import RenderSong from "./render-song.js"

function Results(props) {
    const { recommendations } = props
    return (
        <div>
            {recommendations.length ? recommendations.map(rec => <RenderSong song={rec}/>)
             : "no recommendations"}
        </div>
    )
}

export default Results