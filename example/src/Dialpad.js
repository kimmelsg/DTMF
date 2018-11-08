import React from 'react';
import DTMF from 'dtmf';
import * as S from './styles';

const NUMBER_PAD = [
  [1, ''],
  [2, 'ABC'],
  [3, 'DEF'],
  [4, 'GHI'],
  [5, 'JKL'],
  [6, 'MNO'],
  [7, 'PQRS'],
  [8, 'TUV'],
  [9, 'WXYZ'],
  ['*', ''],
  [0, ''],
  ['#', ''],
];

class DialPad extends React.Component {
  constructor(props) {
    super(props);
    this.player = new DTMF();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'];
    this.state = {
      previousKey: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUmount() {
    window.removeEventListener('keypress', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleMouseDown(e) {
    this.player.play(e.target.name);
  }

  handleMouseUp(e) {
    this.player.stop(e.target.name);
  }

  handleKeyDown({ key }) {
    if (this.state.previousKey === key) return;
    this.setState({ previousKey: key });
    this.player.play(key);
  }

  handleKeyUp({ key }) {
    this.setState({ previousKey: undefined });
    this.player.stop(key);
  }

  render() {
    return (
      <S.Pad>
        {NUMBER_PAD.map(([number, subtext]) => (
          <S.Button
            key={number}
            name={number}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
            {number}
            <S.Subtext>{subtext || ' '}</S.Subtext>
          </S.Button>
        ))}
      </S.Pad>
    );
  }
}

export default DialPad;
