# dtmf [![Build Status](https://travis-ci.org/audiolion/dtmf.svg?branch=master)](https://travis-ci.org/audiolion/dtmf) [![codecov](https://codecov.io/gh/audiolion/dtmf/badge.svg?branch=master)](https://codecov.io/gh/audiolion/dtmf?branch=master)

> Dual Tone - Multi Frequency player using Web Audio API

## Install

```
$ npm install @kimmel/dtmf
```

## Usage

```js
import DTMF from "@kimmel/dtmf";

let player = DTMF();
player.play(1);
player.play(8);
player.play(0);
player.play(0);
//=> plays DTMF sound for each key
```

## API

### DTMF(audioContext: [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext#Syntax))

#### play(key: DialpadKey)

Type: `DialpadKey`, String | Number

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, \*, #

## License

MIT © [Ryan Castner](https://kimmel.com)
