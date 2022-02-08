import React from "react";
import { GiWizardFace } from "react-icons/gi";
import { CgComment } from "react-icons/cg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Post() {
  const [showPost, setShowPost] = useState(); //useState för show post API
  const [showComment, setShowComment] = useState(); //useState för show Comment API
  const { id } = useParams(); //useParams för hämta id och dess funktionalitet
  useEffect(() => {
    //data för post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setShowPost(json));
  }, []);
  useEffect(() => {
    //data för comment
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setShowComment(json));
  }, []);
  let styleDiv = {
    //function för styling
    display: "block",
    border: "2px solid brown",
    backgroundColor: "rgb(19, 19, 16)",
    fontFamily: "Times New Roman",
    margin: "20px 2px",
  };
  let displayBlock = {
    //function för styling
    display: "block",
    textAlign: "left",
    margin: "0px 2px",
    border: "2px solid black",
    padding: 9,
  };
  return showPost && showComment ? (
    <div>
      <article>
        <h3>Information Page</h3>
        <Link
          className="
        btn"
          to={"/"}
        >
          {" "}
          Back
        </Link>

        <article style={displayBlock}>
          <aside className="ikon">
            {" "}
            <GiWizardFace />{" "}
          </aside>

          <p>
            <strong>Id :</strong> {showPost.id}
          </p>
          <p>
            <strong>Title :</strong> {showPost.title}
          </p>
          <p>
            <strong>Body :</strong> {showPost.body}
          </p>
        </article>
        {/* <hr /> */}
      </article>
      <h3>Comment</h3>
      <aside className="ikon">
        {" "}
        <CgComment />{" "}
      </aside>
      <article style={displayBlock}>
        {/* mappa igoneom comment API/data  */}
        {showComment.map((comment) => (
          <div style={styleDiv} key={comment.id}>
            <p>
              <strong>Name : </strong> {comment.name}
            </p>
            <p>
              <strong>Email :</strong> {comment.email}
            </p>
            <p>
              <strong>Body :</strong> {comment.body}
            </p>
          </div>
        ))}
      </article>
    </div>
  ) : (
    <p>
      {" "}
      <AiOutlineLoading3Quarters />
      Loading
    </p>
  );
}

export default Post;
