import React from 'react';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: {
    _id: string;
    title: string;
    content: string;
    category: string;
  }[];
  onShowRecommendations: (category: string) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onShowRecommendations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          onShowRecommendations={onShowRecommendations}
        />
      ))}
    </div>
  );
};

export default ArticleList;