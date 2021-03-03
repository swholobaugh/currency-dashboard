export const formatData = async (data) => {
  
  const ohlc = data.candles.map(item => {
    return [item.datetime, item.open, item.high, item.low, item.close]
  });

  const volume = data.candles.map(item => {
    return [item.datetime, item.volume]
  });

  const symbol = data.symbol;
  
  const empty = data.empty;
  
  return { ohlc, volume, symbol, empty };
}