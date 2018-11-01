type KeypadKey =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "#"
  | "*"
  | "A"
  | "B"
  | "C"
  | "D";

class DTMF {
  oscillatorLow: OscillatorNode | undefined;
  oscillatorHigh: OscillatorNode | undefined;
  audioContext: AudioContext;
  TONE_LENGTH = 150;

  constructor(audioContext?: AudioContext) {
    this.audioContext = audioContext || new AudioContext();
  }

  createOscillator({
    frequency,
    type = "sine"
  }: {
    frequency: number;
    type?: OscillatorType;
  }): OscillatorNode {
    let oscillator = this.audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    return oscillator;
  }

  playTone(lowFrequency: number, highFrequency: number): void {
    this.stop();
    let output,
      input = 0;
    let gainNode = this.audioContext.createGain();
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
    setTimeout(() => {
      this.oscillatorLow && this.oscillatorLow.stop();
      this.oscillatorHigh && this.oscillatorHigh.stop();
    }, this.TONE_LENGTH);
  }

  private playKey(key: KeypadKey): void {
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
      case "A":
        this.playTone(697, 1633);
        break;
      case "B":
        this.playTone(770, 1633);
        break;
      case "C":
        this.playTone(852, 1633);
        break;
      case "D":
        this.playTone(941, 1633);
        break;
    }
  }

  play(key: KeypadKey): void {
    this.playKey(key);
  }

  stop(): void {
    if (this.oscillatorLow) {
      this.oscillatorLow.disconnect();
    }
    if (this.oscillatorHigh) {
      this.oscillatorHigh.disconnect();
    }
  }

  close(): void {
    if (this.audioContext) {
      this.audioContext.close();
    }
  }
}

export default DTMF;
