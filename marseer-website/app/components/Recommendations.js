// components/Recommendations.js
import React from 'react';
import ArticleCard from './ArticleCard';

function Recommendations({ recommendations }) {
  return (
    <div>
      <h2>Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((recommendation) => (
          <ArticleCard
            key={recommendation._id}
            article={recommendation}
            onShowRecommendations={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;