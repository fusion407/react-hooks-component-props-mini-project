import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header 
        name={blogData.name}/>
      <About 
        image={blogData.image} 
        about={blogData.about}/>
      <ArticleList 
        key={blogData.posts.id}
        posts={blogData.posts}
        title={blogData.posts.title}
        date={blogData.posts.date}
        preview={blogData.posts.preview}/>
    </div>
  );
}

export default App;
