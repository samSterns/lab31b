import React, { useState } from 'react';
import QuoteList from '../components/quoteList/QuoteList.js';
import { getAllQuotes, getQuotesByCharacter } from '../services/QuoteFetcher.js';
import useQuoteFetcher from '../hooks/request.js';
import { CharacterDropdown } from '../components/characterDropdown/CharacterDropdown.js';
import CharacterQuoteList from '../components/quoteList/CharacterQuoteList.js';
const FuturamaAppFn = () => {

  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState('');
  const [characterArray, setCharacterArray] = useState([]);


  useQuoteFetcher();

  const fetchQuote = () => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  };

  const fetchQuoteCharacter = () => {
    getQuotesByCharacter(character)
      .then(character => setCharacterArray(character));
  };

  const onSelect = ({ target }) => { 
    event.preventDefault();
    setCharacter(target.value);
  };


  return (
    <>
      <CharacterDropdown onChange={onSelect}/>
      <button onClick={fetchQuote}>Get New Quotes</button>
      <button onClick={fetchQuoteCharacter}>Get by character</button>
      <QuoteList quote={quote} />
      <CharacterQuoteList characterQuote={characterArray} />
    </>
  );
    
};

export default FuturamaAppFn;
