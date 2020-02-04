import React, { Component } from 'react';
import QuoteList from '../components/quoteList/QuoteList.js';
import { getAllQuotes } from '../services/QuoteFetcher.js';


class FuturamaApp extends Component {
   
    state = {
      quote: []
    }

    componentDidMount() {
      getAllQuotes()
        .then(quote => this.setState({ quote }));
    }

    fetchQuote = () => {
      getAllQuotes()
        .then(quote => this.setState({ quote }));
    }

    render() {
      const { quote } = this.state;
      return (
        <>
          <button onClick={this.fetchQuote}>Get New Quotes</button>
          <QuoteList quote={quote} />
        </>
      );
    }

}

export default FuturamaApp
;
