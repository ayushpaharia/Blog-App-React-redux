import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <div
        class="ui sizer vertical segment"
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <i class="huge blogger icon"></i>
        <h1 style={{ position: "relative", top: "-1.3rem", fontSize: "3rem" }}>
          Bloggin App
        </h1>
      </div>
      <PostList />
    </div>
  );
};

export default App;
