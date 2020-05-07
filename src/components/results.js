import React from "react";
import RenderSong from "./render-song.js"

function Results(props) {
    const { recommendations } = props
    return (
        <div>
            {recommendations.length ? "some recommendations" : "no recommendations"}
        </div>
    )
}

export default Results