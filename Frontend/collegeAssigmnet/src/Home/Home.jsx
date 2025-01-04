import React, { useContext } from "react";
import BlogPost from "../Component/BLog/BLogPost";
import Card from "../Component/Card/Card";
import Footer from "../Component/Footer/Footer";
import GetTouch from "../Component/GetTouch/GetTouch";
import Navbar from "../Component/Navbar/Navbar";
import NewSection from "../Component/NewSection/NewSection";
import { ThemeContext } from "../ContextApi/Theme/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#F8F988",
        color: theme === "light" ? "#000000" : "#10439F",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar />
      <NewSection />
      <Card />
      <BlogPost />
      <GetTouch />
      <Footer />
    </div>
  );
};

export default Home;
