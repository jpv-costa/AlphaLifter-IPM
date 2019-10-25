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
