import React, { Component } from 'react';
import Slider from "react-slick";
import logo from '../../logo.svg';
import Header from '../../components/header/index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';

const API = 'http://www.mocky.io/v2/5bec1c1a330000cd25fbc245';

const slidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function searchingFor(searchterm) {
  return function(entersearch) {
    return entersearch.name.toLowerCase().includes(searchterm.toLowerCase()) || !searchterm;
  }
}

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      celebrity: [],
      banner: [],
      
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
      .then(data => this.setState({ celebrity: data.celebrity,banner: data.banner, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  
  render() {
      const { celebrity, banner,searchterm,isLoading, error } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }

      return (
        <div className="container">
          <div><Header celebrityName={this.props.celebrity}/></div>
          <div className="App">
            <form>
            <input type="text" onChange={this.searchHandler} value={searchterm}/>
            </form>
          </div>
          <div className="col-md-10">  
        <Slider {...slidersettings}>
          {banner.map(bannerdata =>
            <div key={bannerdata.id}>
              <a href="#"><img src={bannerdata.image_url} /></a>
            </div>
          )}
        </Slider>
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

export default Celebrity;
