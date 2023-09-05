const getExchangeRate = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_BASE_URL}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_VERSION}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_CURRENCY}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rates');
  }
  const data = await response.json();
  return data;
};

export default getExchangeRate;
