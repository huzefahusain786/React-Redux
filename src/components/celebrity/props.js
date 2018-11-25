import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const API = 'http://www.mocky.io/v2/5bec1c1a330000cd25fbc245';

function searchingFor(searchterm) {
  return function(entersearch) {
    return entersearch.name.toLowerCase().includes(searchterm.toLowerCase()) || !searchterm;
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      celebrity: [],
      searchterm:'',
    };
    this.searchHandler = this.searchHandler.bind (this);
  }

  searchHandler(event) {
    this.setState ({searchterm:event.target.value})
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ celebrity: data.celebrity, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  
  render() {
      const { celebrity, searchterm,isLoading, error } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }

      return (
        <div>
          <div className="App">
            <form>
            <input type="text" onChange={this.searchHandler} value={searchterm}/>
            </form>
          </div>
        <ul>
          {celebrity.filter(searchingFor(searchterm)).map(restdata =>
            <li key={restdata.id}>
              <a href="#"><img src={restdata.image_url} />{restdata.name}</a>
            </li>
          )}
        </ul>
        </div>
        
      );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
