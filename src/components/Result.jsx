import React from 'react';
import News from "./News"
import PropTypes from "prop-types";


const Result = ({newsData}) => {

  if(newsData.length === 0) return null

  return ( 
    <div className="container">
      <div className="row" data-masonry='{"percentPosition": true }'>
      {newsData.map(news => (<News newsData={news} key={news.url}/>))}
    </div>
    </div>
   );
}

Result.propTypes = {
  newsData: PropTypes.array.isRequired
}
 
export default Result;