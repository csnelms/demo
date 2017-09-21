import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>asdf asdf asdf asdf asf asf asf async </p>
        <Link to="/" className="btn btn-primary btn-lg">Home Page</Link>
      </div>
    );
  }
}

export default AboutPage;
