export const FETCH_CRIME_PENDING = 'FETCH_CRIME_PENDING';
export const FETCH_CRIME_SUCCESS = 'FETCH_CRIME_SUCCESS';
export const FETCH_CRIME_ERROR = 'FETCH_CRIME_ERROR';

function fetchProductsPending() {
    return {
        type: FETCH_CRIME_PENDING
    }
}

function fetchProductsSuccess(products) {
    return {
        type: FETCH_CRIME_SUCCESS
        // products: products
    }
}

function fetchProductsError(error) {
    return {
        type: FETCH_CRIME_ERROR
        // error: error
    }
}
