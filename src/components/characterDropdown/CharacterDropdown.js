import React from 'react';
import PropTypes from 'prop-types';

export const CharacterDropdown = ({ Character }) => {
  return (
    <select> 
      <option value="characterName">{Character}</option>
    </select>
    
  );
}
;

CharacterDropdown.propTypes = {
  character: PropTypes.string
}
;
