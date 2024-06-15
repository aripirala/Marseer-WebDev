// components/LandingPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleList from './ArticleList';

function LandingPage() {
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      const { data } = await axios.get('/api/articles/featured');
      setFeaturedArticles(data);
    };

    fetchFeaturedArticles();
  }, []);

  return (
    <div>
      <h1>Welcome to My Article Website</h1>
      <h2>Featured Articles</h2>
      <ArticleList articles={featuredArticles} />
      {/* Other landing page content */}
    </div>
  );
}

export default LandingPage;