const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0;

// const batterySum = batteryBatches.reduce(
//   (previous, current) => previous + current,
//   totalBatteries
// );

// const sum = batteryBatches.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   totalBatteries
// );

const totalBatteries = batteryBatches.reduce(function (sum, batches) {
  return sum + batches;
});

console.log(totalBatteries);
