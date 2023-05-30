import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Home.css";

export default function Home({ apiUrl, apiKey }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [errorModal, setErrorModal] = useState(false);
  const [maxResults, setMaxResults] = useState(0);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleMaxResults(event) {
    setMaxResults(event.target.value)
  }

  async function fetchResults() {
    try {
      let response = await fetch(
        `${apiUrl}search?q=${searchTerm}&part=snippet&maxResults=${maxResults}&key=${apiKey}`
      );
      if (response.status === 400) {
        throw new Error("Request failed with status code " + response.status);
      }
      const data = await response.json();
      const fetchedVideos = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        date: item.snippet.publishedAt
      }));
      setVideos(fetchedVideos);
    } catch (error) {
      console.log(error);
      setErrorModal(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm("");
    fetchResults();
  }

  function handleCloseErrorModal() {
    setErrorModal(false);
  }

  return (
    <div className="videos-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <label htmlFor="results">Max Results</label>
        <input
          type="number"
          min="1"
          max="100"
          step="1"
          onChange={handleMaxResults}
          value={maxResults}
          className="max-results"
        />
        <button type="submit" className="btn btn-danger" id="search-submit">
          Search
        </button>
      </form>

      {!videos.length && (
        <div className="alert alert-dark" role="alert" id="alert-margin">
          No search results yet! Please submit a search above!
        </div>
      )}

      {videos.length > 0 && (
        <div className="video-grid">
          {videos.map((video) =>
             (
              <ul key={video.id}>
                <Link
                  to={`/videos/${video.id}`}
                  className="text-decoration-none"
                >
                  <img src={video.thumbnail} alt={video.title}/>
                  <p
                    id="video-text"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    dangerouslySetInnerHTML={{ __html: video.title }}
                  />
                </Link>
              </ul>
            ) 
          )}
        </div>
      )}

      <Modal show={errorModal} onHide={handleCloseErrorModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          There was an error processing your request. Please try again later.
        </Modal.Body>
      </Modal>
    </div>
  );
}
