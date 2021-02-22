import axios from 'axios';

const key = process.env.REACT_APP_TD_API_KEY;

export const getSymbolHistory = async (symbol) => {
  const response = await axios.get(`https://api.tdameritrade.com/v1/marketdata/${symbol}/pricehistory`, {
    params: {
      apikey: key,
      periodType: 'month',
      period: 1,
      frequencyType: 'daily',
      frequency: 1,
    }
  });

  return response.data;
}
