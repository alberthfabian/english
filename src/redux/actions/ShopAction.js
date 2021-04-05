import axios from 'axios';

export const MORE = 'MORE';
export const INITIAL = 'INITIAL';
export const MODAL = 'MODAL';
export const TYPE = 'TYPE';
export const COLOR = 'COLOR';
export const CONSOLIDATED = 'CONSOLIDATED';
export const RESET = 'RESET';
export const OPEN = 'OPEN';
export const INFO = 'INFO';
export const DATA = 'DATA';
export const BACK = 'BACK';
export const NEXT = 'NEXT';

export const initial = () => {

}

export const intitialType = () => {

}

export const intitialColor = () => {

}

export const more = (value) => {
  return {
    type: 'MORE',
    payload: value
  }
}

export const consolidated = (url, name ) => { 

}

export const modal = (value) => {
  return {
    type: 'MODAL',
    payload: value
  }
}

export const open = (value) => {
  return {
    type: 'OPEN',
    payload: value
  }
}

export const reset = (value) => {
  return {
    type: 'CONSOLIDATED',
    payload: value
  }
}

export const info = (name) => {
  return dispatch => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      dispatch({
        type: 'INFO',
        payload: response.data,
      })
    });
  };
}

export const data = (name) => {
  return dispatch => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then(response => {
      dispatch({
        type: 'DATA',
        payload: response.data,
      })
    });
  };
}

export const back = (value) => {
  return {
    type: 'BACK',
    payload: value
  }
}

export const next = (value) => {
  return {
    type: 'NEXT',
    payload: value
  }
}