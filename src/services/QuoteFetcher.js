export const getAllQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => {
      return res.json();
    });
};
