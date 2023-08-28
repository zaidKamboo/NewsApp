import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  console.log(loading);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pagesize=${props.pagesize}&category=${props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setloading(true);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=${props.apikey}&pagesize=${props.pagesize}&category=${
      props.category
    }&page=${page + 1}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    document.title = `${capitalize(props.category)} - News@24`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2 className="text-center">
        News @24/7 - Top {capitalize(props.category)}Headlines{" "}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  pagesize: 5,
  category: "general",
  country: "in",
};
News.propTypes = {
  pagesize: Number,
  category: PropTypes.string,
  country: PropTypes.string,
};
export default News;
// https://newsapi.org/v2/top-headlines?country=in&apiKey=d6bb853b0c674d0387e9d18bdf972f0c&pagesize=5&category=general
// https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}&pagesize=5&category=general
