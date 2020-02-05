import React, { useState } from 'react';
import QuoteList from '../components/quoteList/QuoteList.js';
import { getAllQuotes } from '../services/QuoteFetcher.js';
import useQuoteFetcher from '../hooks/request.js';
import { CharacterDropdown } from '../components/characterDropdown/CharacterDropdown.js';

const FuturamaAppFn = () => {

  const [quote, setQuote] = useState([]);

  useQuoteFetcher();

  const fetchQuote = () => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  };


  return (
    <>
      <CharacterDropdown />
      <button onClick={fetchQuote}>Get New Quotes</button>
      <QuoteList quote={quote} />
    </>
  );
    

};

export default FuturamaAppFn;
