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
        searchBooks: []
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    getShelfBooks(shelfName){
        return this.state.books.filter((b) => b.shelf === shelfName)
    }

    changeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }));
        });
    };

    updateQuery = (query) => {
        if(query){
            BooksAPI.search(query, this.MAX_RESULTS).then((books) => {
                if(books.length){
                    books.forEach((book, index) => {
                        let myBook = this.state.books.find((b) => b.id === book.id);
                        book.shelf = myBook ? myBook.shelf : 'none';
                        books[index] = book;
                    });

                    this.setState({
                        searchBooks: books
                    });
                }

            });
            } else {
            this.setState({
                searchBooks: []
            });
        }
    };

  render() {
    return (
      <div className="app">
        <Route exact path="/"  render={({history}) => (
          <div className="container landing">
            <Landing />
            <Footer/>
          </div>
        )}/>
        <Route exact path="/main" render={() => (
          <div className="list-books">
            <NavBar/>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" shelf="currentlyReading" books={this.getShelfBooks("currentlyReading")} changeShelf={this.changeShelf}/>
                <Shelf title="Want To Read" shelf="wantToRead" books={this.getShelfBooks("wantToRead")} changeShelf={this.changeShelf}/>
                <Shelf title="Read" shelf="read" books={this.getShelfBooks("read")} changeShelf={this.changeShelf}/>
              </div>
            </div>
            <Footer/>
          </div>
        )}/>

        <Route path="/currentlyReading" render={({history}) => (
          <div className="container">
            <NavBar/>
            <Shelf title="Currently Reading" shelf="currentlyReading" books={this.getShelfBooks("currentlyReading")} changeShelf={this.changeShelf}/>
            <Footer/>
          </div>
        )}/>
        <Route path="/wantToRead" render={({history}) => (
          <div className="container">
            <NavBar/>
            <Shelf title="Want To Read" shelf="wantToRead" books={this.getShelfBooks("wantToRead")} changeShelf={this.changeShelf}/>
            <Footer/>
          </div>
        )}/>
        <Route path="/read" render={({history}) => (
          <div className="container">
            <NavBar/>
            <Shelf title="Read" shelf="read" books={this.getShelfBooks("read")} changeShelf={this.changeShelf}/>
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
