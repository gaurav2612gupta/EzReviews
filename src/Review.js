import React, { useState } from 'react';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      rating,
      review,
      images,
      name,
      email,
      profilePic,
    });

    // Clear form fields (optional)
    setRating(0);
    setReview('');
    setImages([]);
    setName('');
    setEmail('');
    setProfilePic(null);
  };

  return (
    <div className="container mt-5 w-50">
      <h1>Submit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Rating (out of 5)</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'filled' : ''}`}
                onClick={() => setRating(star)}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: rating >= star ? 'gold' : 'gray',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea
            className="form-control"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            placeholder="Write your review"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Attach Image(s)</label>
          <input
            type="file"
            className="form-control"
            id="images"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profilePic" className="form-label">Upload Your Pic (Optional)</label>
          <input
            type="file"
            className="form-control"
            id="profilePic"
            onChange={handleProfilePicChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
