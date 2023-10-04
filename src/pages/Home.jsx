import { useEffect, useState,useRef } from "react";
import { PostCard,Skelton } from "../components";
import {getDocs,collection} from 'firebase/firestore';
import {db} from "../firebase/config"
import {useTitle} from "../hooks/useTitle"

export const Home = () => {
  const [posts,setPosts] = useState(new Array(2).fill(false));
  const [toggle,setToggle] = useState(false);
  useTitle("Home")
  const postsRef =useRef(collection(db,"posts"));



useEffect ( ()=>{
async function getPosts(){
const data = await getDocs(postsRef.current);
// console.log(data.docs);
setPosts(data.docs.map((ev) => ({...ev.data(), id:ev.id})));
}
// console.log("...");
getPosts()
},[postsRef,toggle])

  return (
    <section>
     {posts.map((post , index) => (
      post ? ( <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>) : (
        <Skelton key={index} />
      )
    
))}
    </section>
  );
};
