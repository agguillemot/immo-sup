import React from "react";

function Ratings({ value }) {
    const max = 5;
    const emptyChar = "○";
    const fullChar = "●";

    return <span>{Array(max).fill().map((v,index) => index < value ? fullChar : emptyChar).join('')}</span>;
}

export default Ratings;