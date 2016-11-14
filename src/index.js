import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class FetchAttendee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    }
  }

  componentDidMount() {
    axios.get('http://badgeapi.herokuapp.com/attendees')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.attendees}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchAttendee />,
  document.getElementById('root')
);
