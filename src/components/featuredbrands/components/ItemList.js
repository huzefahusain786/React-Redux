import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {

    constructor(props) {
        super(props);
    
        let bannerArray = [];
        let banner = this.props.items.banner
        for (let key in banner) {
            bannerArray.push(banner[key]);
        }
        this.state = { bannerArray };

        console.log(bannerArray);
    }
    /*componentDidMount() {
        this.props.fetchData();
    }*/

    componentDidMount() {
        this.props.fetchData('http://5bf95f40c480680013bc7e32.mockapi.io/api/v1/items');
    }

    render() {
        

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.state.bannerArray.map((item) => (
                    <li key={item.id}>{item.key}</li>
                ))}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
