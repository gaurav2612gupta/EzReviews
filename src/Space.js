import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Space = () => {
  const { id } = useParams(); // Get the space id from the URL
  const [spaceDetails, setSpaceDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [showModal, setShowModal] = useState(false); // To toggle modal visibility

  // Fetch the space details and its reviews
  useEffect(() => {
    // Mock data. In a real application, this data would be fetched from an API.
    const mockSpaceDetails = {
      id,
      name: "Customer Feedback Space",
      description:
        "This space is dedicated to collecting and showcasing customer feedback.",
    };

    const mockReviews = [
      {
        id: 1,
        rating: 5,
        review: "Excellent service! Highly recommended.",
        name: "John Doe",
        email: "john@example.com",
        submittedAt: "2023-09-22",
        customerPic: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        rating: 4,
        review: "Very good experience overall.",
        name: "Jane Smith",
        email: "jane@example.com",
        submittedAt: "2023-09-21",
        customerPic: "https://via.placeholder.com/100",
      },
      {
        id: 3,
        rating: 3,
        review: "It was okay, but there is room for improvement.",
        name: "Michael Brown",
        email: "michael@example.com",
        submittedAt: "2023-09-20",
        customerPic: "https://via.placeholder.com/100",
      },
    ];

    setSpaceDetails(mockSpaceDetails);
    setReviews(mockReviews);
  }, [id]);

  // Function to generate a code snippet for the review
  const generateCodeSnippet = (review) => {
    const snippet = `
      <div style="border: 1px solid #ddd; padding: 20px; width: 300px; border-radius: 10px; font-family: Arial, sans-serif; background-color: #f9f9f9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <img src="${review.customerPic}" alt="${
      review.name
    }'s profile" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; background-color: #e0e0e0; margin-bottom: 15px;">
    <h5 style="margin: 10px 0; color: #333;">${review.name}</h5>
    <p style="margin: 5px 0; color: #555;">(${review.email})</p>
    <p style="color: #f39c12; font-size: 18px; margin: 5px 0;">${"★".repeat(
      review.rating
    )}${"☆".repeat(5 - review.rating)}</p>
    <p style="color: #666; font-style: italic;">${review.review}</p>
    <p style="color: #aaa; font-size: 12px; margin: 10px 0 0;">Submitted at: ${
      review.submittedAt
    }</p>
</div>

    `;
    setCodeSnippet(snippet);
    setShowModal(true); // Show modal when code is generated
  };

  // Function to copy the code snippet to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet); // Copy the code to clipboard
    alert("Code Snippet copied to clipboard!");
  };

  return (
    <div className="container mt-5 w-50">
      {spaceDetails ? (
        <>
          <h1>{spaceDetails.name}</h1>
          <p>{spaceDetails.description}</p>

          <h2>Customer Reviews</h2>
          <div className="list-group">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="list-group-item d-flex align-items-start mt-3 border border-2"
                >
                  <div style={{ flex: 1 }}>
                    <h5>
                      {review.name} ({review.email}) -{" "}
                      <span style={{ color: "gold" }}>
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                    </h5>
                    <p>{review.review}</p>
                    <small className="text-muted">
                      Submitted at: {review.submittedAt}
                    </small>
                    <br />
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => generateCodeSnippet(review)}
                    >
                      Get Code Snippet
                    </button>
                  </div>
                  <div className="mt-3 pe-3" style={{ marginLeft: "20px" }}>
                    <img
                      src={review.customerPic}
                      alt={`${review.name}'s profile`}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
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

      {/* Modal for displaying code snippet */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Generated Code Snippet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {codeSnippet}
          </pre>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleCopyToClipboard}
          >
            Click to Copy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Space;
