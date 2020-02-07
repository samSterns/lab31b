import React from 'react';
import PropTypes from 'prop-types';
import { Quote } from '../quote/Quote.js';

const CharacterQuoteList = ({ characterQuote }) => {
  const quotesArray = characterQuote.map(character => {
    return <Quote
      key={character.quote} 
      text={character.quote} 
      character={character.character} 
      image={character.image} />;
  });

  return (
    <section>
      {quotesArray}
    </section>
  );
};

CharacterQuoteList.propTypes = {
  characterQuote: PropTypes.array

};

export default CharacterQuoteList; 
