import React, { FC } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './styles/game.scss';
import cx from 'classnames';

import { Directions } from '../Directions';
import Maze from '../Maze/Maze';
import { State } from '../../store/store';
import {
  toggleStart,
  toggleFinish,
  getStart,
  getFinish,
  getFieldOfArrows,
  toggleClick
} from '../../store/actionCreators';

export const getRandomNumber = (min: number, max: number): number => {
  const number = min + Math.random() * (max - min);

  return Math.round(number);
};

interface Props {
  isClick: boolean;
  selectStart: (isStart: boolean) => void;
  selectFinish: (isFinish: boolean) => void;
  selectClick: (isClick: boolean) => void;
  onStart: (start: Array<number>) => void;
  onFinish: (finish: Array<number>) => void;
  onFieldOfArrows: (arrpws: Arrow[]) => void;
  fieldOfArrows: Arrow[];
  start: Array<number>;
}

const Game: FC<Props> = (props) => {
  const {
    isClick,
    selectStart,
    selectFinish,
    selectClick,
    onFinish,
    onFieldOfArrows,
    fieldOfArrows,
    start,
  } = props;

  const currentPosition = [...start];

  const directions: {[key: string]: string} = {
    1: "up",
    2: "down",
    3: "left",
    4: "right"
  };

  const handleStart = () => {
    const directionsArray = [];

    while (directionsArray.length < 10) {
      const arrow = getRandomNumber(1, 4);


      switch (directions[arrow]) {
        case "up":
          if ((currentPosition[0]) > 0) {
            currentPosition[0] -= 1;
            directionsArray.push({
              id: uuidv4(),
              name: directions[arrow],
            });
          }
          break;

        case "down":
          if ((currentPosition[0]) < 2) {
            currentPosition[0] += 1;
            directionsArray.push({
              id: uuidv4(),
              name: directions[arrow],
            });
          }
          break;
        case "left":
          if ((currentPosition[1]) > 0) {
            currentPosition[1] -= 1;
            directionsArray.push({
              id: uuidv4(),
              name: directions[arrow],
            });
          }
          break;

        case "right":
          if ((currentPosition[1]) < 2) {
            currentPosition[1] += 1;
            directionsArray.push({
              id: uuidv4(),
              name: directions[arrow],
            });
          }
          break;
          default:
            break;
      }

    }

    onFieldOfArrows(directionsArray);
    onFinish(currentPosition);
    selectStart(true);
    selectFinish(false);
    selectClick(true);
  };

  return (
    <div className="game">
      <div className="game__container">
        <button
          className={cx("game__button", {"game__button--passive": isClick})}
          type="button"
          onClick={handleStart}
          disabled={isClick}
        >
          Start
        </button>

        <Maze />
      </div>
      <Directions fieldOfArrows={fieldOfArrows} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  start: state.start,
  fieldOfArrows: state.fieldOfArrows,
  isClick: state.isClick,
});

const mapDispatchToProps = {
  selectStart: toggleStart,
  selectFinish: toggleFinish,
  onStart: getStart,
  onFinish: getFinish,
  onFieldOfArrows: getFieldOfArrows,
  selectClick: toggleClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
