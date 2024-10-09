class GuessingGame {
    _min;
    _max;
    _last_answer;

    constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._last_answer = this._min + Math.floor((this._max - this._min + 1) / 2);
        return this._last_answer;
    }

    lower() {
        this._max = this._last_answer;
    }

    greater() {
        this._min = this._last_answer;
    }
}

module.exports = GuessingGame;
