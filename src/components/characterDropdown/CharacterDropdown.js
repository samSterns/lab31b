import React from 'react';
import PropTypes from 'prop-types';

export const CharacterDropdown = ({ onChange }) => {
  return (
    <select id="dropDown" onChange={onChange}> 
      <option value="Fry">Fry</option>
      <option value="Lela">Lela</option>
      <option value="Bender">zydd</option>
      <option value="Dr. Zoydberg">Dr. Zoyberg</option>
      <option value="Mom">Mom</option>
    </select>
  );
  
};
CharacterDropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

