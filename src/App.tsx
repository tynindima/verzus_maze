import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Game from './components/Game/Game';

import './App.scss';
import { State } from './store/store';
import Modal from './components/Modal/Modal';

interface Props {
  isContinueGame: boolean;
};

const App: FC<Props> = (props) => {

  const {isContinueGame} = props;

  return (
    <div className="App">
      {isContinueGame
      && ReactDOM.createPortal(
        <Modal />,
        document.getElementById('portal') as HTMLElement,
      )}
      <Game />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  isContinueGame: state.isContinueGame,
});

export default connect(mapStateToProps)(App);
