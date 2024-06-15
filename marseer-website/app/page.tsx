"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList';
import config from '../config';

const HomePage: React.FC = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        const url = config.backend.apiUrl + '/articles/featured'
        console.log("url - ", url)

        const { data } = await axios.get(url);
        console.log("url - ", url)
        setFeaturedArticles(data);
      } catch (error) {
        console.error('Error fetching featured articles from ', error);
      }
    };

    fetchFeaturedArticles();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.content.slice(0, 100)}...</p>
                <div className="flex flex-wrap">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;