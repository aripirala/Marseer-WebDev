// components/ArticlePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recommendations from './Recommendations';

function ArticlePage({ match }) {
  const [article, setArticle] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data } = await axios.get(`/api/articles/${match.params.id}`);
      setArticle(data);
    };

    const fetchRecommendations = async () => {
      const { data } = await axios.get(`/api/recommendations/${match.params.id}`);
      setRecommendations(data);
    };

    fetchArticle();
    fetchRecommendations();
  }, [match.params.id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export default ArticlePage;