import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Directions } from '../Directions';
import Maze from '../Maze/Maze';
import { State } from '../../store/store';
import { toggleStart, toggleFinish, getStart, getFinish } from '../../store/actionCreators';

export const getRandomNumber = (min: number, max: number): number => {
  const number = min + Math.random() * (max - min);

  return Math.round(number);
};

interface Props {
  isStart: boolean;
  selectStart: (isStart: boolean) => void;
  selectFinish: (isFinish: boolean) => void;
  start: Array<number>;
  onStart: (start: Array<number>) => void;
  onFinish: (finish: Array<number>) => void;
}

const Game: FC<Props> = (props) => {
  const {
    isStart,
    selectStart,
    selectFinish,
    start,
    onFinish,
  } = props;

  console.log(isStart);

  const currentPosition = [...start];

  const directions: {[key: string]: string} = {
    1: "up",
    2: "down",
    3: "left",
    4: "right"
  };

  const [fieldOfArrows, setFieldOfArrows] = useState<Arrow[] | any>([]);

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

    setFieldOfArrows(directionsArray);
    onFinish(currentPosition);
    selectStart(true);
    selectFinish(false);
  };

  return (
    <div className="game">
      <button
        type="button"
        onClick={handleStart}
      >
        Start
      </button>

      <Maze />
      <Directions fieldOfArrows={fieldOfArrows} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  start: state.start,
  isStart: state.isStart,
});

const mapDispatchToProps = {
  selectStart: toggleStart,
  selectFinish: toggleFinish,
  onStart: getStart,
  onFinish: getFinish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
