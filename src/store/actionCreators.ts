import {
  SET_IS_START,
  SET_IS_FINISH,
  SET_START,
  SET_FINISH,
  SET_IS_CONTINUE_GAME,
  SET_ANSWER,
  SET_FIELD_OF_ARROWS,
  SET_IS_CLICK,
} from './types';

export const toggleStart = (isStart: boolean) => ({type: SET_IS_START, isStart});
export const toggleFinish = (isFinish: boolean) => ({type: SET_IS_FINISH, isFinish});
export const getStart = (start: Array<number>) => ({type: SET_START, start});
export const getFinish = (finish: Array<number>) => ({type: SET_FINISH, finish});
export const toggleContinueGame = (isContinueGame: boolean) => ({type: SET_IS_CONTINUE_GAME, isContinueGame});
export const getAnswer = (answer: string) => ({type: SET_ANSWER, answer});
export const getFieldOfArrows = (arrows: Arrow[]) => ({type: SET_FIELD_OF_ARROWS, arrows});
export const toggleClick = (isClick: boolean) => ({type: SET_IS_CLICK, isClick});
