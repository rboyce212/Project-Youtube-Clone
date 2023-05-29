import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./PlayVideo.css";

function PlayVideo({ apiUrl, apiKey }) {
  const { id } = useParams();

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
      <div style={{ width: "100%" }}>
        <YouTube videoId={id} />
      </div>
    </div>
  );
}

export default PlayVideo;
