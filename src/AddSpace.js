import React, { useState } from 'react';

const AddSpace = () => {
  const [spaceName, setSpaceName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddSpace = (e) => {
    e.preventDefault();
    // Logic to handle adding the space goes here
    console.log('New Space Added:', { spaceName, title, description });
    
    // Clear form fields after submission (optional)
    setSpaceName('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container mt-5">
      <h1>Add New Space</h1>
      <form onSubmit={handleAddSpace}>
        <div className="mb-3">
          <label htmlFor="spaceName" className="form-label">Space Name</label>
          <input
            type="text"
            className="form-control"
            id="spaceName"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
            placeholder="Enter space name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Space</button>
      </form>
    </div>
  );
};

export default AddSpace;
