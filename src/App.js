import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NewsDetails from "./Pages/NewsDetails";
import Nav from "./components/Nav";
import "./App.css"
import NewsCard from "./components/NewsCard";
import { useState } from "react";
import { useEffect } from "react";
import { getAllStarships } from "./components/news-api";
import { MyContext } from './context'

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const NewsData = async () => {
      const newsData = await getAllStarships();
      setNews(newsData.articles);
    };
    NewsData();
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={{ news }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsCard />} />
          <Route path="/news/:title" element={<NewsDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
