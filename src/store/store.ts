import { createStore, AnyAction } from 'redux';
import {
  SET_IS_FINISH,
  SET_IS_START,
  SET_START,
  SET_FINISH,
  SET_IS_CONTINUE_GAME,
} from './types';
import { getRandomNumber } from '../components/Game';

export interface State {
  start: Array<number>;
  finish: Array<number>;
  isStart: boolean;
  isFinish: boolean;
  isContinueGame: boolean;
};

const initialState = {
  start: [getRandomNumber(0, 2), getRandomNumber(0,2)],
  finish: [],
  isStart: false,
  isFinish: false,
  isContinueGame: false,
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
    case SET_FINISH:
      return {
        ...state,
        finish: action.finish,
      };
    case SET_IS_CONTINUE_GAME:
      return {
        ...state,
        isContinueGame: action.isContinueGame,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
