import React from 'react';
import ArticleCard from './ArticleCard';

// interface ArticleListProps {
//   articles: {
//     _id: string;
//     title: string;
//     content: string;
//     category: string;
//   }[];
// }

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
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
  );
};



// const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
//   const handleShowRecommendations = (category: string) => {
//     // Implement the logic to show recommendations for the given category
//     console.log(`Show recommendations for category: ${category}`);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {articles.map((article) => (
//         <ArticleCard
//           key={article._id}
//           article={article}
//           onShowRecommendations={handleShowRecommendations}
//         />
//       ))}
//     </div>
//   );
// };

export default ArticleList;