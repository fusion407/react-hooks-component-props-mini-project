import React from "react";

function Article( prop ) {
    let title = prop.title;
    let date = prop.date;
    let preview = prop.preview;
    if(!date) {
        date = "January 1, 1970";
    } else {
        date = date;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;