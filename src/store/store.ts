import { createStore, AnyAction } from 'redux';
import {
  SET_IS_FINISH,
  SET_IS_START,
  SET_START,
  SET_FINISH,
  SET_IS_CONTINUE_GAME,
  SET_ANSWER,
  SET_FIELD_OF_ARROWS,
  SET_IS_CLICK,
} from './types';
import { getRandomNumber } from '../components/Game';

export interface State {
  start: Array<number>;
  finish: Array<number>;
  answer: string;
  fieldOfArrows: Arrow[];
  isStart: boolean;
  isFinish: boolean;
  isContinueGame: boolean;
  isClick: boolean;
};

const initialState = {
  start: [getRandomNumber(0, 2), getRandomNumber(0,2)],
  finish: [],
  answer: "",
  fieldOfArrows: [],
  isStart: false,
  isFinish: false,
  isContinueGame: false,
  isClick: false,
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
    case SET_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };
      case SET_FIELD_OF_ARROWS:
        return {
          ...state,
          fieldOfArrows: action.arrows,
        };
      case SET_IS_CLICK:
        return {
          ...state,
          isClick: action.isClick,
        };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
