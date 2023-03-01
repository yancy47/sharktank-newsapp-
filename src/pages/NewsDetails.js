import { useNavigate, useParams } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "../context";

function NewsDetails() {

  let { title } = useParams();
  const { news } = useContext(MyContext)
  let navigate = useNavigate() // returns function

  function goBack() {
    navigate(-1)
  }


  return (<div className="newsDetail">
    {news
      .filter((newsItem) => newsItem.title === title)
      .map((item, index) => (
        <div key={index} className='detailCard'>
          <img src={item.urlToImage} alt={item.urlToImage} className='detailing'/>
         <div className="detailContent">
          <p className="titledetail"> {item.title}</p>          
          <p className="content"> {item.content}  <a href={`${item.url}`}>Source</a></p>
          <div className="date">
          <p>Date: {item.publishedAt}</p>
          <p>Author: {item.author} </p>
          </div>
          </div>
        </div>
      ))
    }
    <button onClick={goBack}>Back</button>
  </div>
  )
}

export default NewsDetails;