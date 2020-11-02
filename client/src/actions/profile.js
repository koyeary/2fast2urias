import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED 
} from './types';

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
    try {
      const res = await api.get('/profile/me');
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  
// Update new stats to profile
export const addStats = (formData, history) => async dispatch => {
    try {
        const res = await api.post(`/profile/stats`, formData);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Stat added', 'success'));

        history.push('/dashboard');

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Clear stat history
export const clearHistory = () => async dispatch => {
    if(window.confirm(`Clicking OK will permanently delete your account history, and you'll start fresh`)) {
        try {
            await api.delete('/profile');

            dispatch({ type: CLEAR_PROFILE });

            dispatch(setAlert('Your account history has been deleted'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

// Delete account & profile
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        await api.delete('/profile');
  
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: ACCOUNT_DELETED });
  
        dispatch(setAlert('Your account has been permanently deleted'));
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  };