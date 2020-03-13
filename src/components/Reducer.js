import {FETCH_CRIME_PENDING, FETCH_CRIME_SUCCESS, FETCH_CRIME_ERROR} from './action';

const initialState = {
    pending: false,
    crime: [],
    error: null
}

export function crimeReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CRIME_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CRIME_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_CRIME_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getCrime = state => state.crime;
export const getCrimePending = state => state.pending;
export const getCrimeError = state => state.error;
