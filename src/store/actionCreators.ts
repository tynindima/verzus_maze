import {
  SET_IS_START,
  SET_IS_FINISH,
  SET_START,
} from './types';

export const toggleStart = (isStart: boolean) => ({type: SET_IS_START, isStart});
export const toggleFinish = (isFinish: boolean) => ({type: SET_IS_FINISH, isFinish});
export const getStart = (start: Array<number>) => ({type: SET_START, start});
