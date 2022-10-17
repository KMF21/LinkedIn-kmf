import React, { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { BiCommentDetail, BiShareAlt, BiSend } from "react-icons/bi";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{description[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={MdOutlineThumbUpOffAlt} title="Liked" color="gray" />
        <InputOption Icon={BiCommentDetail} title="Comment" color="gray" />
        <InputOption Icon={BiShareAlt} title="Share" color="gray" />
        <InputOption Icon={BiSend} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
