import React, { useEffect, useState } from "react";

const Card = () => {
  const categories = ["Popular", "Career", "Technology", "Health", "Sports"];
  const [filter, setFilter] = useState("Popular");
  const [newsItems, setNewsItems] = useState([
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title: "Health Tips: How to stay fit this winter",
      description:
        "Learn how to maintain your fitness during the colder months.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Career Growth: Tips for climbing the corporate ladder",
      description:
        "Practical advice for achieving your career goals and thriving at work.",
      category: "Career",
      imageUrl: "",
    },
    {
      title: "Career Growth: Tips for climbing the corporate ladder",
      description:
        "Practical advice for achieving your career goals and thriving at work.",
      category: "Career",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },

    {
      title:
        "Delhi pollution: CAQM invokes GRAP Stage 3 as air quality deteriorates",
      description:
        "The air quality in Delhi has worsened, prompting authorities to take action.",
      category: "Health",
      imageUrl: "",
    },
    {
      title: "Latest tech updates: Innovations in AI technology",
      description:
        "Explore the new advancements in Artificial Intelligence reshaping the future.",
      category: "Technology",
      imageUrl: "",
    },
    {
      title: "Sports Highlights: Big wins in football this week",
      description:
        "Catch up on the thrilling matches and big wins in football.",
      category: "Sports",
      imageUrl: "",
    },
  ]);

  const [error, setError] = useState(false); // Tracks API error state

  // Fetch images from Pixabay API
  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = "48029436-33d63386a27f91eb13d105032";
      const query = "news";
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
        query
      )}&image_type=photo&per_page=${newsItems.length}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Pixabay API Response:", data);

        if (data.hits && data.hits.length > 0) {
          const updatedNewsItems = newsItems.map((newsItem, index) => ({
            ...newsItem,
            imageUrl:
              data.hits[index]?.webformatURL ||
              "https://via.placeholder.com/300",
          }));
          setNewsItems(updatedNewsItems);
        } else {
          throw new Error("No images found in API response.");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
        // Fallback to placeholder images
        setNewsItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            imageUrl: "https://via.placeholder.com/300",
          }))
        );
      }
    };

    fetchImages();
  }, []); // Runs once on component mount

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter news items based on the selected category
  const filteredNewsItems =
    filter === "Popular"
      ? newsItems
      : newsItems.filter(
          (newsItem) => newsItem.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="relative px-10 py-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">Top News</h1>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="h-10 px-2 border border-2 text-gray-400 rounded-full hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="Popular" className="text-center ">
            Filter
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between mb-6">
        <ul className="flex flex-wrap gap-6">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer transition transform hover:scale-105 hover:text-red-500 font-medium text-gray-600 ${
                filter === category ? "text-red-500" : ""
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <button className="h-16 lg:h-10 w-60 px-6 border-2 border-gray-300 text-gray-700 rounded-full hover:border-red-400 transition transform hover:scale-105">
          Explore All News
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-6">
          Failed to load images. Please try again later.
        </div>
      )}

      {/* News Cards */}
      <div
        className="flex gap-6 overflow-x-auto py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {filteredNewsItems.map((news, index) => (
          <div
            key={index}
            className="w-72 flex-shrink-0 rounded-3xl border border-gray-200 shadow-md hover:shadow-lg transition"
          >
            <div
              className="h-60 rounded-t-3xl bg-gray-200"
              style={{
                backgroundImage: `url(${news.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-4">
              <p className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                {news.title}
              </p>
              <p className="text-gray-500 text-sm line-clamp-3">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
