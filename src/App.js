import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './components/featuredbrands/store/configureStore';
import FeaturedBrands from './components/featuredbrands/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/common/css/common.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
      <Provider store={store}>
        <div><FeaturedBrands /></div>
      </Provider>
      </div>
    );
  }
}

export default App;
