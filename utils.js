export function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

export const getDEMApoints = (dataPoint, period) => {
  const data = dataPoint.map(item => item.y);
  const EMAreducer = (accumulator, currentValue, idx) => {
    if (idx == 0) {
      accumulator.push(currentValue);
    } else {
      const k = 2 / (period + 1);
      accumulator.push(currentValue * k + accumulator[idx - 1] * (1 - k));
    }
    return accumulator;
  };

  const EMA = data.reduce(EMAreducer, []);
  const EMAofEMA = EMA.reduce(EMAreducer, []);

  const DEMAmap = (EMA, index) => {
    return 2 * EMA - EMAofEMA[index];
  };
  const DEMAvalues = EMA.map(DEMAmap);

  return dataPoint.map((item, index) => {
    return { date: item.date, y: DEMAvalues[index] };
  });
};

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
export const clamp = (number, min, max) => {
  return Math.min(Math.max(number, min), max);
};
