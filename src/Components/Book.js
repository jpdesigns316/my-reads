import React, {Component} from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import {Modal, Button} from 'react-bootstrap';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  authors = '';

  state = {
    show: false
  };

  showAuthors = (book) => {
    if(book.authors.lentgh>1)  {


    }
  }
  render() {
    const {book} = this.props;
    let close = () => this.setState({show: false});
    return (
      <div className="book" id={book.id}>
        <Modal show={this.state.show} onHide={close} container={this} book={book} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{book.title}<br/>
              <small>by {book.authors}</small>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <strong>Published:</strong>
                {book.publishedDate}<br/>
                <strong>Publisher:</strong>
                {book.publisher}</div>
              <div className="col-md-6">
                <strong>Rating:</strong>
                {book.averageRating}<br/>
                <strong>Pages:</strong>
                {book.pageCount}</div>
            </div>
            <strong>Description:</strong><br/> {book.description}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>

        <div className="book-top">
          <div className="book-cover"><img src={book.imageLinks.thumbnail} alt={book.title} className="book-cover" onClick={() => this.setState({show: true})}/></div>
          <ShelfChanger book={book} changeShelf={this.props.changeShelf}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;
