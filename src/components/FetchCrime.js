import {fetchCrimePending, fetchCrimeSuccess, fetchCrimeError} from 'action';

function fetchCrime() {
    return dispatch => {
        dispatch(fetchCrimePending());
        fetch('http://nflarrest.com/api/v1/crime'')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCrimeSuccess(res.crime);
            return res.crime;
        })
        .catch(error => {
            dispatch(fetchCrimeError(error));
        })
    }
}

export default fetchCrime;
