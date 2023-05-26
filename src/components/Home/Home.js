import React, { useState } from "react";
import YouTube from "react-youtube";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videoIds, setVideoIds] = useState([]);
  
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;


  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  async function fetchResults() {
    try {
      let response = await fetch(
        `${apiUrl}search?q=${searchTerm}&maxResults=10&key=${apiKey}`
      );
      const data = await response.json();
      const fetchedVideoIds = data.items.map((item) => item.id.videoId);
      setVideoIds(fetchedVideoIds);
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
      {!videoIds.length && (
        <div class="alert alert-dark" role="alert">
          No search results yet!, Please submit a search above!
        </div>
      )}
      {videoIds.length > 0 && (
        <div>
          {videoIds.map((videoId) => (
            <YouTube
              key={videoId}
              videoId={videoId}
              opts={{ width: "640", height: "360" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
