import React, {useState, useEffect} from 'react';
import NewsItem from '../Components/NewsItem';
import axios from 'axios';
import NEWS_API_KEY from "../config.js";

export default function Search({value}) {

    const [sarticles, setsArticles] = useState([]);

    useEffect(() => {
        const getsArticles = async () => {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${NEWS_API_KEY}`)

            setsArticles(res.data.articles);
            console.log(res);
        }
        getsArticles();
    }, [value]);


    return (
        <div className="search">
            <h1>Search Results for {value}</h1>

            {sarticles.map(({ title, description, url, urlToImage }) => (
                <NewsItem title={title}
                description={description}
                url={url} 
                urlToImage={urlToImage} />
            ))}
        </div>
    )
}