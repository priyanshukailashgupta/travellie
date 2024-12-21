import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      comment: "Had the time of my life! Excellent service and unforgettable memories.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      comment: "Everything was perfectly organized. Will definitely book again!",
      rating: 4,
    },
    {
      name: "Alex Lee",
      comment: "Great value for money. Highly recommend to all travel lovers!",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-8 p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
            <p className="text-gray-600 mt-2 italic">"{review.comment}"</p>
            <p className="text-yellow-500 mt-4">
              {"★".repeat(review.rating)}{" "}
              {"☆".repeat(5 - review.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
