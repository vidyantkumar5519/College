import React, { useEffect, useState } from "react";
import TypingEffect from "react-typing-effect";

const NewSection = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true); // Start loading
      try {
        // Fetching images from Pixabay API
        const response = await fetch(
          `https://pixabay.com/api/?key=48029436-33d63386a27f91eb13d105032&q=news&image_type=photo&per_page=3`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
          // Select a random image from the results
          setImage(data.hits[0]?.webformatURL || null); 
        } else {
          setError("No images found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading after the image is fetched
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between inset-0 bg-black bg-opacity-80 mt-10 lg:mt-20">
        <div className="relative h-[80vh]">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full text-center lg:text-left px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight lg:leading-[5rem] w-full lg:w-[50rem] max-w-full">
              Global Latest News In <br />
              <TypingEffect
                text={[" INDIA", " USA", " AFRICA", " NEWZEALAND", " ENGLAND", " WEST INDIES"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={1000}
                eraseDelay={3000}
                className="inline-block text-blue-500"
              />
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white opacity-80 max-w-lg">
              Stay updated with the latest global news happening in India. Discover insights, trends, and more to keep you informed.
            </p>
            <button className="mt-8 flex items-center justify-center font-medium bg-gradient-to-r from-green-500 to-blue-500 w-72 sm:w-48 lg:w-72 h-12 sm:h-14 rounded-full text-white hover:shadow-xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="text-center">Discover More</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-6 hidden lg:block">
          <div className="w-auto h-96 lg:w-96 lg:h-[32rem] bg-white mt-2 lg:mt-10 lg:mr-16 rounded-lg flex items-center justify-center overflow-hidden">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : image ? (
              <img
                src={image}
                alt="Random from Pixabay"
                className="w-full h-full object-cover"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSection;
