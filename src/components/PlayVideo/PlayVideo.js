import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

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
    <div>
        <div>
          <YouTube videoId={id} />
        </div>
    </div>
  );
}

export default PlayVideo;
