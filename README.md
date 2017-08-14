# myReads
This is a project completed for the React Developer degree at Udacity. This application was intended to learn the basics of creating React applicaions. The base design was to create a Bookshelf cataloging application to keep track of books and placed them into three categories; currently reading, read, and want to read.

## Needed to run this program:
A computer (DUH!)
NodeJs - For Windows or Mac users go to their [download page](https://nodejs.org/en/download) and download the latest version for your operating sytem. For Linux users read this [page](https://nodejs.org/en/download/package-manager/) to find out how to install it depending on your Linux version.
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


---
Credit [react-bootstrap](https://react-bootstrap.github.io/)
