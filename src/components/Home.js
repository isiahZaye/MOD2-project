import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from 'fetchProducts';
import {getProductsError, getProducts, getProductsPending} from 'reducer';
import LoadingSpinner from './SomeLoadingSpinner';
import ProductList from './ProductList';
import Action from 'Action'
import FetchCrime from 'Action'




class CrimeView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchCrime} = this.props;
        fetchCrime();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {crime, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <LoadingSpinner />

        return (
            <div className='crime-list-wrapper'>
                {error && <span className='crime-list-error'>{error}</span>}
                <CrimeList crime={crime} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getCrimeError(state),
    crime: getCrime(state),
    pending: getCrimePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCrime: fetchCrimeAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrimeView );
