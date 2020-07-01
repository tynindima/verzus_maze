import { createStore, AnyAction } from 'redux';
import {
  SET_IS_FINISH,
  SET_IS_START,
  SET_START,
} from './types';
import { getRandomNumber } from '../App';

export interface State {
  start: Array<number>;
  isStart: boolean;
  isFinish: boolean;
};

const initialState = {
  start: [getRandomNumber(0, 2), getRandomNumber(0,2)],
  isStart: false,
  isFinish: false,
};

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_IS_START:
      return {
        ...state,
        isStart: action.isStart,
      };
    case SET_IS_FINISH:
      return {
        ...state,
        isFinish: action.isFinish,
      };
    case SET_START:
      return {
        ...state,
        start: action.start,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
