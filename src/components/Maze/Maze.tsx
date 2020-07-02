import React, { FC } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import './styles/maze.scss'

import startImg from '../../img/start2.png';
import { State } from '../../store/store';
import { toggleFinish, getAnswer, toggleContinueGame } from '../../store/actionCreators';

const maze = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

interface Props {
  finish: Array<number>;
  start: Array<number>;
  isFinish: boolean;
  isStart: boolean;
  answer: string;
  selectFinish: (isFinish: boolean) => void;
  onAnswer: (answer: string) => void;
  onContinueGame: (isCountinue: boolean) => void;
};

const Maze: FC<Props> = (props) => {

  const {
    finish,
    start,
    isFinish,
    isStart,
    answer,
    selectFinish,
    onAnswer,
    onContinueGame,
  } = props;

  const handleSelect = (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
    const { id } = event.currentTarget;
    if (isStart && !isFinish) {
      onAnswer(id);

      if (id === finish.join('')) {
        selectFinish(true);
      } else {
        setTimeout(() => {
          selectFinish(true);
        }, 300);
      }

      setTimeout(() => {
        onContinueGame(true);
      }, 1500);
    }
  };

  return (
    <table className="maze">
        <tbody>
        {maze.map((_, y) => (
          <tr key={y} className="maze__row">
            {maze[y].map((_, x) => (
            <td
              onClick={handleSelect}
              className={cx("maze__digit",
              {"maze__digit--success": isFinish && finish.join('') === `${y}${x}`},
              {"maze__digit--fail": finish.join('') !== `${y}${x}` && answer === `${y}${x}`}

              )}
              key={x}
              id={`${y}${x}`}
            >
              {start.join('') === `${y}${x}`
                ? <img className="maze__img" src={startImg} alt="start"/>
                : null}
            </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
  );
};

const mapStateToProps = (state: State) => ({
  start: state.start,
  finish: state.finish,
  isFinish: state.isFinish,
  isStart: state.isStart,
  answer: state.answer,
});

const mapDispatchToProps = {
  selectFinish: toggleFinish,
  onAnswer: getAnswer,
  onContinueGame: toggleContinueGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Maze);
