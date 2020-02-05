export const getAllQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/characters/<character name></character>')
    .then((res) => {
      return res.json();
    });
}
;
