import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home( {apiUrl, apiKey} ) {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  async function fetchResults() {
    try {
      let response = await fetch(
        `${apiUrl}search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Request failed with status code " + response.status);
      }
      const data = await response.json();
      const fetchedVideos = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        date: item.snippet.publishedAt
      }));
       console.log("Videos:", fetchedVideos);
       setVideos(fetchedVideos);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm("");
    fetchResults();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      {!videos.length && (
        <div className="alert alert-dark" role="alert">
          No search results yet! Please submit a search above!
        </div>
      )}
      {videos.length > 0 && (
        <div>
          {videos.map((video) =>
            video.id ? (
              <ul key={video.id}>
                <Link
                  to={`/videos/${video.id}`}
                  className="text-decoration-none"
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    dangerouslySetInnerHTML={{ __html: video.title }}
                  />
                </Link>
              </ul>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
