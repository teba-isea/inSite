import React from "react";
import PropTypes from "prop-types";


const News = ({ newsData }) => {
  const { title, description, url, urlToImage, publishedAt, source} = newsData;
  return (
    <div className="card m-1" style={{ width: "30%", height: "50%"}}>
      <img src={urlToImage} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <small>{publishedAt}</small>
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{description}</p>
        <a href={url} className="btn m-1 btn-primary">
         {`Go to ${source.name}`}
        </a>
      </div>
    </div>
  );
};

News.propTypes = {
  newsData: PropTypes.object.isRequired
}

export default News;