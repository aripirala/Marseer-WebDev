"use client";

import React, { useEffect, useState } from 'react';
import { getArticles, getRecommendations } from '../services/articleService';
import ArticleList from './components/ArticleList';
import RecommendationList from './components/RecommendationList';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  const fetchRecommendations = async (category: string) => {
    const data = await getRecommendations(category);
    setRecommendations(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ArticleList articles={articles} onShowRecommendations={fetchRecommendations} />
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recommendations</h2>
          <RecommendationList recommendations={recommendations} />
        </div>
      )}
    </div>
  );
};

export default HomePage;