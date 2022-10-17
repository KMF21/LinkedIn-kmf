import React, { useEffect } from "react";
import "../styles/Feed.css";
import { HiPencilAlt, HiPhotograph } from "react-icons/hi";
import {
  BsPlayBtnFill,
  BsNewspaper,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import CreateIcon from "./CreateIcon";
import InputOption from "./InputOption";
import Post from "./Post";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from 'react-flip-move'; 
 

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
const user =useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name:user.displayName,
      description: user.email,
      message: input,
      photoUrl:user.photoUrl || " ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon Icon={HiPencilAlt} />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={HiPhotograph} color="#70B5F9" title="Photo" />
          <InputOption Icon={BsPlayBtnFill} color="#e7a33e" title="Video" />
          <InputOption
            Icon={BsFillCalendarDateFill}
            color="#c0cbcd"
            title="Event"
          />
          <InputOption
            Icon={BsNewspaper}
            color="#7fc15e"
            title="Write article"
          />
        </div>
      </div>

      {/* post */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
