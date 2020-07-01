import React, { FC } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import startImg from '../../img/start.png';
import { State } from '../../store/store';
import { toggleFinish } from '../../store/actionCreators';

const maze = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

interface Props {
  finish: Array<number>;
  start: Array<number>;
  isFinish: boolean;
  selectFinish: (isFinish: boolean) => void;
};

const Maze: FC<Props> = (props) => {

  const { finish, start, isFinish, selectFinish } = props;

  const handleSelect = (event: any) => {
    if (finish.join('') === event.target.id) {
      selectFinish(true);
      console.log('Winner');
    } else {
      console.log('Lost');

    }

  };

  return (
    <table className="table">
        <tbody>
        {maze.map((_, y) => (
          <tr key={y} className="table__row">
            {maze[y].map((_, x) => (
            <td
              onClick={handleSelect}
              className={cx("table__digit",
              {"table__digit--success": isFinish && finish.join('') === `${y}${x}`}
              )}
              key={x}
              id={`${y}${x}`}
            >
              {start.join('') === `${y}${x}`
                ? <img className="table__img" src={startImg} alt="start"/>
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
  isFinish: state.isFinish,
});

const mapDispatchToProps = {
  selectFinish: toggleFinish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Maze);
