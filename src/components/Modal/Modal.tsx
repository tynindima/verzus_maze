import React, { FC } from 'react';
import { connect } from 'react-redux';

import './styles/modal.scss';
import { State } from '../../store/store';
import { getRandomNumber } from '../Game';
import {
  toggleContinueGame,
  getAnswer,
  toggleFinish,
  getFieldOfArrows,
  getStart,
  toggleStart,
  getFinish,
  toggleClick
} from '../../store/actionCreators';

interface Props {
  finish: Array<number>;
  answer: string;
  onContinue: (c: boolean) => void;
  onAnswer: (answer: string) => void;
  selectFinish: (isFinish: boolean) => void;
  onFieldOfArrows: (arrpws: Arrow[]) => void;
  onStart: (start: Array<number>) => void;
  onFinish: (finish: Array<number>) => void;
  selectStart: (isStart: boolean) => void;
  selectClick: (isClick: boolean) => void;
}

const Modal: FC<Props> = (props) => {
  const {
    onContinue,
    onAnswer,
    selectFinish,
    selectClick,
    onFieldOfArrows,
    onStart,
    onFinish,
    selectStart,
    finish,
    answer,
  } = props;

  const handleCoutinue = () => {
    onAnswer('');
    onFieldOfArrows([]);
    onStart([getRandomNumber(0, 2), getRandomNumber(0, 2)]);
    onFinish([]);

    selectStart(false);
    onContinue(false);
    selectFinish(false);
    selectClick(false);
  };

  const handleClose = () => {
    onContinue(false);
    selectStart(false);
  };

  return (
    <div className="modal">
      <div className="modal__window">
      {finish.join('') === answer
        ? <h3 className="modal__status">Winner!</h3>
        : <h3 className="modal__status">Loser!</h3>
      }
        <p className="modal__text">Do you want to contimnue?</p>
        <div className="modal__container">
          <button
            className="modal__button modal__button--continue"
            type="button"
            onClick={handleCoutinue}
          >
            Contunue
          </button>
          <button
            className="modal__button modal__button--close"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  finish: state.finish,
  answer: state.answer,
});

const mapDispatchToProps = {
  onContinue: toggleContinueGame,
  onAnswer: getAnswer,
  selectFinish: toggleFinish,
  selectStart: toggleStart,
  selectClick: toggleClick,
  onFieldOfArrows: getFieldOfArrows,
  onStart: getStart,
  onFinish: getFinish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
