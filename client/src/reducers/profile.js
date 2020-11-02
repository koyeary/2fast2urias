/* eslint-disable import/no-anonymous-default-export */
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE, 
} from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    stats: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                stats: []
            }
        case PROFILE_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            }
        default:  
            return state;
    }
}