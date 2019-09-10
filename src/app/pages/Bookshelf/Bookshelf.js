import * as React from 'react'
import PropTypes from 'prop-types';
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Button from "../../lib/Button/Button";
import Typography from "../../lib/Typography/Typography";

import books from "../../../books";

import "./Bookshelf.scss";

class Bookshelf extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleDisplayAll: false,
    };
  };

  displayAllBooks = () => {
    this.setState(prevState => ({
      toggleDisplayAll: !prevState.toggleDisplayAll
    }));
  };

  render() {
    const { books } = this.props;
    const { toggleDisplayAll} = this.state;

    return (
      <div className="bookshelf">
          {books.subjects &&
            <div className="bookshelf-options-panel">
              <Button
                onClick = {() => this.displayAllBooks()}
              >
                Display All Books
              </Button>
              <Button
                onClick = {() => alert('Display science books')}
              >
                Display Science Books
              </Button>
              <Button
                onClick = {() => alert('Display Fiction books')}
              >
                Display Fiction Books
              </Button>
            </div>
          }
          <div className="bookshelf-book-selection">
            {/* displays all books */}
            {(toggleDisplayAll && books.books) && books.books.map((book, index) => {
              // new component needed for book-card
              return (
                <div
                  className="book-card"
                  key={index}
                  onClick={() => this.props.history.push(`/book/${book.id}`)}
                >
                  <div className="book-title">
                    <Typography
                      titleSmall
                      bold
                    >
                      {book.title}
                    </Typography>
                  </div>
                  <div className="book-author-info">
                    {book.authors.map((item, index) => {
                      return (
                        <div
                        className="author-info-card"
                        key={index}
                        >
                          <div className="book-author-name">
                            <Typography
                              text
                              bold
                            >
                              {item.name}
                            </Typography>
                          </div>
                          <div className="book-author-years">
                            <Typography text>
                              {`${item.birth_year} - ${item.death_year}`}
                            </Typography>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="book-additional-info">
                    <div className="download-count">
                      <Typography
                        text
                        bold
                      >
                        {`Download count ${book.download_count}`}
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            )}
          </div>
      </div>
    )
  }
}

Bookshelf.propTypes = {
  books: PropTypes.object,
  history: PropTypes.object,
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      books: books.selectors.getBooks(state)
    }),
  )
);

export default enhance(Bookshelf);

