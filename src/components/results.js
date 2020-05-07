import React from "react";

function Results(props) {
    const { recommendations } = props
    return (
        <div>
            {recommendations.length ? "some recommendations" : "no recommendations"}
        </div>
    )
}

export default Results