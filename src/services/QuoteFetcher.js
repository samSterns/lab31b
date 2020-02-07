export const getAllQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then((res) => {
      return res.json();
    });
}
;

export const getQuotesByCharacter = (character) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}`)
    .then((res) => {
      return res.json();
    });
}
;
