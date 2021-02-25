import axios from 'axios';

const key = process.env.REACT_APP_POLYGON_API_KEY;

const polygonClient = axios.create({
  baseURL: 'https://api.polygon.io/v2/',
});

export const getForex = async (symbol) => {
  const response = await polygonClient.get(`aggs/ticker/${symbol}/prev?unadjusted=true&apiKey=${key}`);
  console.log(response);
  return response;
}
