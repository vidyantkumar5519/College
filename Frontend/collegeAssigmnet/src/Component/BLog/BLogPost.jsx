import React, { useState, useEffect } from "react";

const BlogPost = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(false); // Tracks API error state

  // Fetch images from Pixabay API
  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = "48029436-33d63386a27f91eb13d105032";
      const query = "news";
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
        query
      )}&image_type=photo&per_page=8`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Pixabay API Response:", data);

        if (data.hits && data.hits.length > 0) {
          const updatedNewsItems = data.hits.map((hit, index) => ({
            title: `Blog Title ${index + 1}`,
            description: `Short description or location ${index + 1}`,
            imageUrl: hit.webformatURL || "https://via.placeholder.com/300",
          }));
          setNewsItems(updatedNewsItems);
        } else {
          throw new Error("No images found in API response.");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
        // Fallback to placeholder images
        setNewsItems([
          { title: "Blog Title 1", description: "Short description", imageUrl: "https://via.placeholder.com/300" },
          { title: "Blog Title 2", description: "Short description", imageUrl: "https://via.placeholder.com/300" },
          // Repeat for other default items
        ]);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative px-10 py-10 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Latest Blog Insights
        </h1>
        <button className="h-16 lg:h-10 w-60 px-6 border-2 border-gray-300 rounded-full text-gray-700 hover:border-red-400 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-red-400 focus:outline-none">
          Explore All Blogs
        </button>
      </div>

      <div className="flex justify-between">
        {/* Featured Blog */}
        <div className="space-y-4 max-w-xl">
          <div className="w-full h-96 border hover:border-red-400 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={newsItems[0]?.imageUrl || "https://via.placeholder.com/720x400"}
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-500">Delhi</p>
          <h2 className="text-lg font-semibold text-gray-800 leading-tight">
            New counties in region bordering Ladakh won’t legitimise China’s illegal occupation, says India
          </h2>
        </div>

        {/* Blog List */}
        <div
          className="hidden lg:block h-[30rem] w-[45rem] overflow-y-auto pl-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex flex-col space-y-4">
            {newsItems.length > 0 ? (
              newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center w-full h-28 border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <img
                    src={item.imageUrl}
                    alt={`Blog Thumbnail ${index + 1}`}
                    className="w-40 h-32 object-cover"
                  />
                  <div className="pl-4">
                    <h3 className="text-sm font-bold text-gray-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-red-500">Failed to load images. Please try again later.</p>
            )}
          </div>
        </div>
      </div>

      {error && <p className="text-red-500">There was an error fetching images.</p>}
    </div>
  );
};

export default BlogPost;
