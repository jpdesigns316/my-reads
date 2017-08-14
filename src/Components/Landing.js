import React, {Component} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return(
      <div className="row landing">

        <div className="col-md-8 col-md-offset-2">
        <Jumbotron bsClass="landing-jumbotron">
          <div className="landing-body">
   <h1>myReads</h1>
   <p>This is a project completed for the Udacity React Developer degree. This
      is a book reading application to keep track of books, and places them
    into three categories. Currently reading, have read, and want to read. This
  application goes beyond what is taught for this programm.</p>
   <p><Button href="/main" bsStyle="primary">Learn more</Button></p>
 </div>
 </Jumbotron>
</div>
      </div>
    )
  }
}

export default Landing;
