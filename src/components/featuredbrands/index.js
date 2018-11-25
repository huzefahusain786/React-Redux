import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './components/ItemList';
import Playground from '../../components/playground/index';

class FeaturedBrands extends Component {
    render() {
      return (
        <div>
            <ItemList />
            
        </div>  
      );
    }
  }

export default FeaturedBrands;
