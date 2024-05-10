export const add = (value1: number, value2: number) => value1 + value2;

export const add2 = (...param1: number[]): number => {
  let sum = 0;
  param1.forEach((element) => {
    sum += element;
  });
  return sum;
};

// console.log(add(1, 2));
// console.log(add(3, 2));
// console.log(add2(1, 2, 3, 4, 5));
// console.log(add2(2,3));
