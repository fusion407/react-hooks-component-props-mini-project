import React from "react";

function About ( prop ) {
    let src = prop.image;
    const alt = 'blog logo';
    const p = prop.about;
    if(src) {
        src = prop.image;
    } else {
        src = 'https://via.placeholder.com/215'
    }
    return (
        <aside>
            <img 
                src={src} 
                alt={alt} />
            <p>{p}</p>
        </aside>
    )
}

export default About;