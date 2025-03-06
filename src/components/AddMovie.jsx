import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css'; // Optional: Add styles for the AddMovie form

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      director,
      genre,
      releaseYear,
      synopsis,
      posterUrl,
    });
    // Add logic to submit data if needed
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div>
          <label htmlFor="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="posterUrl">Poster Image URL:</label>
          <input
            type="url"
            id="posterUrl"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
