import { addBorder } from "./addBorder";

describe(addBorder.name, () => {
  // need to do this test again
  xit("should return an 4 stars wall", () => {
    // Given
    const data = ["a"];
    // When
    const response = addBorder(data);

    // Then
    expect(response).toEqual(["*****", "**a**", "*****"]);
  });
  it("Should add * at the end of the of word", () => {
    // arrange
    const data = ["add", "dad"];

    // act
    const response = addBorder(data);

    // assert
    expect(response).toEqual(["*****", "*add*", "*dad*", "*****"]);
  });
});
