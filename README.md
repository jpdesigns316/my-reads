# myReads
This is a project completed for the React Developer degree at Udacity. This application was intended to learn the basics of creating React applications. The base design was to create a Bookshelf cataloging application to keep track of books and placed them into three categories; currently reading, read, and want to read.

## Screenshots

You can view all the shelves at once or you can used the dropdown to look at one specific shelf.

All Book Shelves
![Main Page](/images/main02.PNG)

Single  Book Shelf
![Main Page](/images/main02.PNG)

Search page:
![Search Page](/images/search.PNG)

By clicking on a book you will get more information about it
![More Detail](/images/modal.PNG)

## Licensing

This repository uses the MIT License. [click here](Liscence.MD) to find out more about it.

## Needed to run this program:
A computer (DUH!)
NodeJs - For Windows or Mac users go to their [download page](https://nodejs.org/en/download) and download the latest version for your operating system. For Linux users read this [page](https://nodejs.org/en/download/package-manager/) to find out how to install it depending on your Linux version.
npm - Node Package Manager


## Installation
1. Clone this repositroy:
```
$ git clone https://github.com/jpdesigns316/my-reads.git
$ cd myReads
```
2. Install the packages in `package.json`
```
$ npm install
```
* *react* -  Needed to run a React application.
* *react-dom* - Used to manipulate the DOM
* *react-scripts* - Used to configure the NodeJS server to run the React application.
* *react-bootstrap* - Used to deploy some features of Twitter Bootstrap.
* *react-router-dom* - Used to create the routing for the application.
* *prop-types* - Used to pass down props from parent to child.
* *react-throtle* - Used for the search bar.

3. Run the server
```
$ npm start
```

## File structure
| Filename | Location | Description |
|---|--|---|
| index.js | /public | This is the index page |
| favicon.ico | /public | The icon for the website |
| App.css | /src | The file that contains the base css code |
| App.js | /src | The main js file that runs the React application. Written in JSX |
| App.test.js | /src | This is here for testing purposes |
| BookAPI.js | /src | The API used to get information about the books |
| index.css | /src | Global Styles|
| index.js | /src | This is only for creating the DOM |
| Book.js | /src/Components | Component for displaying the book |
| Footer.js | /src/Components | Component to that displays the infomation in the footer. |
| NavBar.js | /src/Components | Component to display the Navbar. Renamed to NavBar so it wouldn't be confused with the Navbar that is in react-bootstrap |
| Search.js | /src/Components | Component designed for the search page |
| Shelf.js | /src/Components | Component for showing the books depending on what shelf they should be on |
| ShelfChanger.js | /src/Component | Component for moving books between shelves |


 ## Routing
 | Route | Description |
 |--|--|
 | / | Main Page |
 | /currentlyReading | Currently Reading shelf |
 | /read | Read shelf |
 | /wantToRead | Currently Reading shelf |
 | /serach | Search Page |


## Valid Search categories

```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```
---
Credit [react-bootstrap](https://react-bootstrap.github.io/)
