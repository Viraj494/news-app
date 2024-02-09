import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles).catch((error) => console.log(error)));
    },[])

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index) => {
          return <NewsItem key={index} title={news.title} description={news.description}  src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard