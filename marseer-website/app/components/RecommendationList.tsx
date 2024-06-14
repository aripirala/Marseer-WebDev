import React from 'react';

interface RecommendationListProps {
  recommendations: {
    _id: string;
    title: string;
    content: string;
  }[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recommendations.map((rec) => (
        <div key={rec._id} className="p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{rec.title}</h3>
          <p>{rec.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;