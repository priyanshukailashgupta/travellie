import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Top 10 Travel Destinations for 2024",
      excerpt: "Discover the most sought-after travel destinations for your next adventure.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Travel Tips for First-Time Travelers",
      excerpt: "Prepare for your journey with these essential travel tips.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "How to Travel on a Budget",
      excerpt: "Explore the world without breaking the bank with our budget travel guide.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-orange-600 font-bold mt-4 inline-block"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
