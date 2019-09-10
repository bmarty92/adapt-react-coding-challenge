import * as React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Book from "./pages/Book/Book";

import books from "../books";

import "./App.scss";

class App extends React.Component {

  componentDidMount() {
    const { getBooks } = this.props;
      fetch('http://localhost:3010/db')
      .then((response) => {
        return response.json();
      })
      .then((booksJson) => {
        getBooks(booksJson);
    });
  }

  render() {
    return (
      <div className="book-app">
        <Switch>
          <Route path="/" exact component={Bookshelf} />
          <Route path="/book/:id" component={Book} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      books: books.selectors.getBooks(state)
    }),
    dispatch =>
      bindActionCreators(
        {
          getBooks: books.actions.getBooks
        },
        dispatch
      )
  )
);

export default enhance(App);
