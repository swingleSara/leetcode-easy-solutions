const maximumUnits = (boxTypes, truckSize) => {
    let res = 0;
    boxTypes = boxTypes.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < boxTypes.length; i++) {
        let count = Math.min(boxTypes[i][0], truckSize);
        res += count * boxTypes[i][1];
        truckSize -= count;
    }
    return res;
};
