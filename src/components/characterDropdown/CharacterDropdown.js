import React from 'react';
import PropTypes from 'prop-types';

export const CharacterDropdown = ({ onChange }) => {
  return (
    <select id="dropDown" onChange={onChange}> 
      <option value="all-characters">All Characters</option>
      <option value="Fry">Fry</option>
      <option value="Bender">Bender</option>
      <option value="Dr. Zoydberg">Dr. Zoyberg</option>
      <option value="Mom">Mom</option>
    </select>
  );
  
};
CharacterDropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

