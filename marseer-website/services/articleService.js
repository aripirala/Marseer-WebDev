import axios from 'axios';

const API_URL = 'http://localhost:3000/api/articles';

export const getArticles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getRecommendations = async (category) => {
  const response = await axios.get(`${API_URL}/recommendations/${category}`);
  return response.data;
};

export const createArticle = async (article) => {
  const response = await axios.post(API_URL, article);
  return response.data;
};