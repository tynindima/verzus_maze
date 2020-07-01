import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import { Directions } from './components/Directions';
import  Maze  from './components/Maze/Maze';
import { State } from './store/store';
import { toggleStart, toggleFinish, getStart } from './store/actionCreators';

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
}

const App: FC<Props> = (props) => {
  const {
    isStart,
    selectStart,
    selectFinish,
    start,
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
  const [finish, setFinish] = useState<Array<number>>([]);

  console.log(start);

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
    setFinish(currentPosition);
    selectStart(true);
    selectFinish(false);
  };


  return (
    <div className="App">
      <button
        type="button"
        onClick={handleStart}
      >
        Start
      </button>

      <Maze finish={finish} start={start} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
