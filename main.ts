/**************************************************************************
 *                                 ENUMS                                  *
 **************************************************************************/

// Enums in TypeScript are a way to define a set of named constants, making your code more readable and easier to
// manage. They allow you to create a collection of related values that can be numeric or string-based. Enums help to
// organize your code and make it more expressive by giving meaningful names to constant values.

// Numeric Enums

// Numeric Enums: Default, auto-incremented from zero.

enum Direction {
  East, // 0
  West, // 1
  North, // 2
  South, // 3
}

console.log(Direction[2]); // OUTPUT: North

// Note: When accessing enums by index, use `Direction[2]` if you want the name of the enum.

// String Enums

// String Enums: Members have string values, offering better readability.

enum Colour {
  Red = "Red",
  Black = "Black",
  Green = "Green",
}

console.log(Colour.Black); // OUTPUT: Black

// Heterogeneous Enums

// Heterogeneous Enums: Mix of numeric and string values.

enum Mix {
  Up = 0,
  Down = "Down",
}

console.log(Mix.Up); // OUTPUT: 0

// Note: Heterogeneous enums are not typically accessed using indices like numeric enums, especially for string values.
