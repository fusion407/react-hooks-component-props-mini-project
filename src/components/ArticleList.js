import React from "react";
import Article from "./Article.js";

function ArticleList( prop ) {
    const postCount = prop.posts.length;
    const articles = [];
    for(let i=0;i<postCount;i++) {
        articles.push(
            <Article 
                key={prop.id}
                posts={prop.posts}
                title={prop.title}
                date={prop.date}
                preview={prop.preview}/>
        )
    }

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;