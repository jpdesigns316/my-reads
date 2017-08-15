import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

/* Component Imports */
import Shelf from './Components/Shelf';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Search from './Components/Search';

/* CSS Imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class BooksApp extends React.Component {
  MAX_RESULTS = 30;

  state = {
    books: [],
    searchBooks: [],
    shelves: [
      {
        id: 1,
        name: "Currently Reading",
        type: "currentlyReading"
      }, {
        id: 2,
        name: "Want To Read",
        type: "wantToRead"
      }, {
        id: 3,
        name: "Read",
        type: "read"
      }
    ]

  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  getShelfBooks(shelfName) {
    return this.state.books.filter((b) => b.shelf === shelfName)
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  updateQuery = (query) => {
    if (query) {
      BooksAPI.search(query, this.MAX_RESULTS).then((books) => {
        if (books.length) {
          books.forEach((book, index) => {
            let myBook = this.state.books.find((b) => b.id === book.id);
            book.shelf = myBook
              ? myBook.shelf
              : 'none';
            books[index] = book;
          });

          this.setState({searchBooks: books});
        }

      });
    } else {
      this.setState({searchBooks: []});
    }
  };

  /*
  displayShelf
  This funciton will configure the Shelf component depending on shelfNum.
  0 = currentShelf, 1 = wantToRead, 2 = read
  */
  displayShelf = (shelfNum) => {
    return (<Shelf title={this.state.shelves[shelfNum].name} shelf={this.state.shelves[shelfNum].type} books={this.getShelfBooks(this.state.shelves[shelfNum].type)} changeShelf={this.changeShelf}/>)
  }

  render() {
    const {shelves} = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={({history}) => (
          <div className="container landing">
            <Landing/>
            <Footer/>
          </div>
        )}/>
        {/* Created loop to diplay the different Shelf components. */}
        <Route exact path="/main" render={() => (
          <div className="container">
            <NavBar/> {shelves.map((shelf) => <Shelf key={shelf.id} title={shelf.name} shelf={shelf.type} books={this.getShelfBooks(shelf.type)} changeShelf={this.changeShelf}/>)}
            <Footer/>
          </div>
        )}/>

        <Route path="/currentlyReading" render={({history}) => (
          <div className="container">
            <NavBar/> {this.displayShelf(0)}
            <Footer/>
          </div>
        )}/>
        <Route path="/wantToRead" render={({history}) => (
          <div className="container">
            <NavBar/> {this.displayShelf(1)}
            <Footer/>
          </div>
        )}/>
        <Route path="/read" render={({history}) => (
          <div className="container">
            <NavBar/> {this.displayShelf(2)}
            <Footer/>
          </div>
        )}/>
        <Route path="/search" render={({history}) => (
          <div className="container">
            <NavBar/>
            <Search books={this.state.searchBooks} updateQuery={this.updateQuery} changeShelf={this.changeShelf}/>
            <Footer/>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
