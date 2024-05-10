export function absoluteValuesSumMinimization(myArray: number[]): number {
  const isEven = myArray.length % 2 === 0;
  return isEven
    ? myArray[myArray.length / 2 - 1]
    : myArray[Math.floor(myArray.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
