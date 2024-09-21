import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Space = () => {
  const { id } = useParams(); // Get the space id from the URL
  const [spaceDetails, setSpaceDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch the space details and its reviews
  useEffect(() => {
    // Mock data. In a real application, this data would be fetched from an API.
    const mockSpaceDetails = {
      id,
      name: 'Customer Feedback Space',
      description: 'This space is dedicated to collecting and showcasing customer feedback.',
    };

    const mockReviews = [
      {
        id: 1,
        rating: 5,
        review: 'Excellent service! Highly recommended.',
        name: 'John Doe',
        email: 'john@example.com',
        submittedAt: '2023-09-22',
        customerPic: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        rating: 4,
        review: 'Very good experience overall.',
        name: 'Jane Smith',
        email: 'jane@example.com',
        submittedAt: '2023-09-21',
        customerPic: 'https://via.placeholder.com/100',
      },
      {
        id: 3,
        rating: 3,
        review: 'It was okay, but there is room for improvement.',
        name: 'Michael Brown',
        email: 'michael@example.com',
        submittedAt: '2023-09-20',
        customerPic: 'https://via.placeholder.com/100',
      },
    ];

    setSpaceDetails(mockSpaceDetails);
    setReviews(mockReviews);
  }, [id]);

  return (
    <div className="container mt-5">
      {spaceDetails ? (
        <>
          <h1>{spaceDetails.name}</h1>
          <p>{spaceDetails.description}</p>

          <h2>Customer Reviews</h2>
          <div className="list-group">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="list-group-item d-flex align-items-start mt-5 w-75">
                  <div style={{ flex: 1 }}>
                    <h5>
                      {review.name} ({review.email}) -{' '}
                      <span style={{ color: 'gold' }}>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </span>
                    </h5>
                    <p>{review.review}</p>
                    <small className="text-muted">Submitted at: {review.submittedAt}</small>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <img
                      src={review.customerPic}
                      alt={`${review.name}'s profile`}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available for this space.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading space details...</p>
      )}
    </div>
  );
};

export default Space;
