import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

function NewsCard() {
  const { news } = useContext(MyContext)

  return (
    <div className="cardbox">
      {news.map((newsItem, item) => (
        <>
        <div className="imageDiv">
          <img src={newsItem.urlToImage} alt={newsItem.urlToImage} />
          </div>
          <div key={item} className='topCard'>
          <Link key={newsItem.title} to={`/news/${newsItem.title}`}>
            <p className="title">  {newsItem.title}</p>
          </Link>
          <p className="content">{newsItem.description}</p>
        </div>
        </>
      ))}
    </div>
  );
}
export default NewsCard;