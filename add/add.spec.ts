import { add, add2 } from "./add";

describe(add.name, () => {
  it("should be able to return a negative number", () => {
    // given
    const value1 = -3;
    const value2 = -5;

    // when
    const result = add(value1, value2);

    // then
    expect(result).toBe(-8);
  });
  it("test 1", () => {
    // act
    const result = add(1, 2);

    // assert
    expect(result).toBe(3);
  });

  it("test 2", () => {
    // act
    const result = add(3, 2);

    // assert
    expect(result).toBe(5);
  });
});

xdescribe(add2.name, () => {
  // console.log(add2(2,3));
  it("test 1", () => {
    // arrange
    const data = [1, 2, 3, 4, 5];

    // act
    const result = add2(...data);

    // assert
    expect(result).toBe(15);
  });

  it("test 2", () => {
    // arrange
    const data = [2, 3];

    // act
    const result = add2(...data);

    // assert
    expect(result).toBe(5);
  });
});
