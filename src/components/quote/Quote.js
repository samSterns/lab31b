import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ text, character, image }) => {
  return (
    <div>
      <figure> 
        <p>image</p>
      </figure>
      <figcaption>
        <p>{text}</p>
        <p>{character}</p>
      </figcaption>

    </div>
  );
}
;

Quote.propTypes = {
  character: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};
