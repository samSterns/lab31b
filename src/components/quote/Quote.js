import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ text, character, image }) => {

  return (
    <div> 
      <img src={image} />

      <p>{text}</p>
      <p>{character}</p>
          
    </div>

  );
};

Quote.propTypes = {
  character: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};
