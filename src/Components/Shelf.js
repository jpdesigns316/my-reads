import React, {Component} from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { ListGroup, ListGroupItem }  from 'react-bootstrap';

class Shelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ListGroup bsClass="books-grid">
                    {this.props.books.map((book) => (
                        <ListGroupItem key={book.id} bsClass="contact-list-item">
                          <Book
                              book={book}
                              changeShelf={this.props.changeShelf}/>
                        </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
            </div>
        )
    }
}

export default Shelf;
