import axios from 'axios';

const key = process.env.REACT_APP_POLYGON_API_KEY;

export const searchSymbol = async (symbol) => {
  const response = await axios.get(`https://api.polygon.io/v2/reference/tickers`, {
    params: {
      apikey: key,
      sort: 'ticker',
      market: 'STOCKS',
      active: true,
      search: symbol
    }
  });

  return response.data;
}
