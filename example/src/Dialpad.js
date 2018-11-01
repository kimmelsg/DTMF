import React from 'react';
import DTMF from '@kimmel/dtmf';
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
  }

  handleClick = number => e => {
    e.preventDefault();
    this.player.play(number);
    let target = e.target;
    this.props.onClick(number);
    setTimeout(() => target.blur(), 300);
  };

  render() {
    return (
      <S.Pad>
        {NUMBER_PAD.map(([number, subtext]) => (
          <S.Button key={number} onClick={this.handleClick(number)} name={number}>
            {number}
            <S.Subtext>{subtext || ' '}</S.Subtext>
          </S.Button>
        ))}
      </S.Pad>
    );
  }
}

export default DialPad;
