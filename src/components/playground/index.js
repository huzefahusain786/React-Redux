import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

class Playground extends Component {
  render() {
    if (this.props.items) {
      return (
        <div className="App">
        <h1>This is from Playground Component</h1>  
        <ul>
            {this.props.items.map((item) => (
              <li key={item.id}>
                {item.label}
              </li>
            ))}
        </ul>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(Playground);
