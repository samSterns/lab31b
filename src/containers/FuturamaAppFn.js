import React, { useState, useEffect } from 'react';
import QuoteList from '../components/quoteList/QuoteList.js';
import { getAllQuotes } from '../services/QuoteFetcher.js';
import useQuoteFetcher from '../hooks/request.js';


const FuturamaAppFn = () => {

  const [quote, setQuote] = useState([]);

  //   useEffect(() => {
  //     getAllQuotes()
  //       .then(quote => setQuote(quote));
  //   }, []);
  useQuoteFetcher();

  const fetchQuote = () => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  };


  return (
    <>
      <button onClick={fetchQuote}>Get New Quotes</button>
      <QuoteList quote={quote} />
    </>
  );
    

};

export default FuturamaAppFn;
