import React, { useState } from "react";
import { logDOM } from "@testing-library/react";

const ApiHandler = () => {
   const [posts, setPosts] = useState([]);
   
   const fetchPosts = async () => {
      try {
         const fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"});
         const data = await fetchedData.json();
         setPosts(data);
      } catch (error) {
         console.error(error);
      }
   }
   
   return (
     <div className="App">
        <h1>Fetch Users</h1>
        {posts.length !== 0 ? posts.map(({title, id}, index) => {
           return (
             <h4 key={id}>
                {index + 1} ->  {title}
             </h4>
           )
        }) : <button onClick={fetchPosts}>
            Fetch Posts
         </button>
        }
     </div>
   )
}

export default ApiHandler;