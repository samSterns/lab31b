import { useState, useEffect } from 'react';
import { getAllQuotes } from '../services/QuoteFetcher.js';

const useQuoteFetcher = () => {

  const [quote, setQuote] = useState([]);


  useEffect(() => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  }, []);

  return quote;

};

export default useQuoteFetcher;
