import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result"

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b65044def5094b33bc13486d88bf375f`;
      const req = await fetch(url,fetch(url, {
    mode:'no-cors',
    method: "GET"
  });
      const res = await req.json();
      setNews(res.articles);
    };
    consultApi();
  }, [category]);

  return (
    <Fragment>
      <Header />
      <div className="container bg-white">
        <Form setCategory={setCategory} />

        <Result newsData={news}/>
      </div>
    </Fragment>
  );
}

export default App;
