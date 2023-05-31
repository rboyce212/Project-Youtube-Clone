import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./PlayVideo.css";

function PlayVideo({ apiUrl, apiKey }) {
  const { id } = useParams();
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        await fetch(`${apiUrl}videos?id=${id}&key=${apiKey}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoData();
  }, [apiUrl, apiKey, id]);

  function handleSubmit(event) {
    event.preventDefault();

    let newCommentArray = [...commentArray, { commenterName, comment }];
    setCommentArray(newCommentArray);
    setCommenterName("");
    setComment("");
  }

  return (
    <div
      id="playVideo"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
        marginTop: "25px",
        textAlign: "center"
      }}
    >
      <div>
        <YouTube videoId={id} />
        <hr></hr>
        <form id="commentForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            onChange={(event) => setCommenterName(event.target.value)}
            value={commenterName}
            placeholder="Name..."
          />
          <div>
            <label htmlFor="comment">Comment</label>
          </div>
          <input
            type="text"
            id="comment"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            placeholder="..."
          />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Submit
            </button>
          </div>
        </form>
        <hr></hr>
        <div className="comments-list">
          {commentArray.map((item, index) => {
            return (
              <p key={index}>
                <div className="commenter-name">
                  <strong>{item.commenterName}</strong>
                </div>
                {`${item.comment}`}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
