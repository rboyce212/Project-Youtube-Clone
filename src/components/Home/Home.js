import React, { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videoIds, setVideoIds] = useState([]);
  const [errorModal, setErrorModal] = useState(false);
  
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
        <div className="alert alert-dark" role="alert">
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
      <Modal
        show={errorModal}
        onHide={handleCloseErrorModal}
        centered
      >
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
