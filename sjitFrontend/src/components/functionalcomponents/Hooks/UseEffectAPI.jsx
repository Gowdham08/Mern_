import { useEffect, useState } from "react";
import axios from "axios";
const UseEffectAPI = () => {
var [post, setPost] = useState([]);
useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res.data)
        setPost(res.data);
        // console.log(post);
    })
    .catch((err) => console.log("Couldn't read the API", err));
},[]);
return (
    <div>
    <h1>This is UseEffect Example with API</h1>
    <br />
    <h2>
        We are Going to Fetch data from JSOn PlaceHolder and Display the data
    </h2>
    <ol>
        {post.map((posts) => (
        <li key={posts.id}>{posts.title}</li>
        ))}
    </ol>
    <button onClick={()=>{console.log("Button Clicked!!")}}>Hello</button>
    </div>
);
};
export default UseEffectAPI;
