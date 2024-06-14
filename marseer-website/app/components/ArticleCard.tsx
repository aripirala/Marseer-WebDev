import React from 'react';

interface ArticleCardProps {
  article: {
    _id: string;
    title: string;
    content: string;
    category: string;
  };
  onShowRecommendations: (category: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onShowRecommendations }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{article.title}</h2>
      <p>{article.content}</p>
      <p className="text-sm text-gray-500">{article.category}</p>
      <button
        className="mt-2 text-blue-500"
        onClick={() => onShowRecommendations(article.category)}
      >
        Show Recommendations
      </button>
    </div>
  );
};

export default ArticleCard;