export const addBorder = (picture: string[]) => {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall); // The unshift() method adds new elements to the beginning of an array.

  picture.push(wall); // method adds new items to the end of an array.

  for (let i = 1; i < picture.length - 1; i++) {
    let numberOfStarsToAdd = 5 - picture[i].length;
    let isEven = numberOfStarsToAdd % 2 === 0;

    isEven
      ? (picture[i] =
          "*".repeat(numberOfStarsToAdd / 2) +
          picture[i] +
          "*".repeat(numberOfStarsToAdd / 2))
      : (picture[i] = "*".repeat(2) + picture[i] + "*".repeat(1));
  }

  return picture;
};

// console.log(addBorder(["abc", "ded"]));
// console.log(addBorder(["add", "dad"]));
//console.log(addBorder(["c", "zz"]));
