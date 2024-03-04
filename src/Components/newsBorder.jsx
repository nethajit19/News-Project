import { useEffect, useState } from "react"
import axios from "axios";
import NewsItem from "./newsItem";

const NewsBorder =({category})=>{

    const[article,setArticle]=useState([]);

    useEffect(()=>{


        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=280d51e895e04fe2b03ae8e88924e6b7`;
        axios.get(url)
        .then((res) => {

            setArticle(res.data.articles);
        })
        



    },[category])

    return(
       <div>

        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>

        {
            article.map((news,index)=>{

                return(
                    <>
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    </>
                )


            })
        }

       </div>
    )
}

export default NewsBorder