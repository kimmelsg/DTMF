"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DTMF = /** @class */ (function() {
  function DTMF(audioContext) {
    this.TONE_LENGTH = 150;
    this.audioContext = audioContext || new AudioContext();
  }
  DTMF.prototype.createOscillator = function(_a) {
    var frequency = _a.frequency,
      _b = _a.type,
      type = _b === void 0 ? "sine" : _b;
    var oscillator = this.audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    return oscillator;
  };
  DTMF.prototype.playTone = function(lowFrequency, highFrequency) {
    var _this = this;
    this.stop();
    var output,
      input = 0;
    var gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.1;
    this.oscillatorLow = this.createOscillator({ frequency: lowFrequency });
    this.oscillatorLow.connect(
      gainNode,
      0,
      0
    );
    gainNode.connect(this.audioContext.destination);
    this.oscillatorHigh = this.createOscillator({ frequency: highFrequency });
    this.oscillatorHigh.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    this.oscillatorLow.start(0);
    this.oscillatorHigh.start(0);
    setTimeout(function() {
      _this.oscillatorLow && _this.oscillatorLow.stop();
      _this.oscillatorHigh && _this.oscillatorHigh.stop();
    }, this.TONE_LENGTH);
  };
  DTMF.prototype.playKey = function(key) {
    switch (String(key)) {
      case "1":
        this.playTone(697, 1209);
        break;
      case "2":
        this.playTone(697, 1336);
        break;
      case "3":
        this.playTone(697, 1477);
        break;
      case "4":
        this.playTone(770, 1209);
        break;
      case "5":
        this.playTone(770, 1336);
        break;
      case "6":
        this.playTone(770, 1477);
        break;
      case "7":
        this.playTone(852, 1209);
        break;
      case "8":
        this.playTone(852, 1336);
        break;
      case "9":
        this.playTone(852, 1477);
        break;
      case "*":
        this.playTone(941, 1209);
        break;
      case "0":
        this.playTone(941, 1336);
        break;
      case "#":
        this.playTone(941, 1477);
        break;
    }
  };
  DTMF.prototype.play = function(key) {
    this.playKey(key);
  };
  DTMF.prototype.stop = function() {
    if (this.oscillatorLow) {
      this.oscillatorLow.disconnect();
    }
    if (this.oscillatorHigh) {
      this.oscillatorHigh.disconnect();
    }
  };
  DTMF.prototype.close = function() {
    if (this.audioContext) {
      this.audioContext.close();
    }
  };
  return DTMF;
})();
exports.default = DTMF;
//# sourceMappingURL=index.js.map
