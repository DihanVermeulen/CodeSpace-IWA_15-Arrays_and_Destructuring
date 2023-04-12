const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const {
  lists: [[, first], [, second], [, third]],
} = data || {};

/** Result array that all values are pushed to */
const result = [];

/**
 * Extracts the biggest value from each of the arrays
 * @returns the biggest value between the three arrays
 */
const extractBiggest = () => {
  if (first[first.length - 1] > second[second.length - 1]) {
    /**
     * Value that is returned from the
     * popped array at the first {@link first} array
     */
    const poppedValue = first.pop();
    return poppedValue;
  }

  if (third[third.length - 1] < second[second.length - 1]) {
    /**
     * Value that is returned from the
     * popped array at the second {@link second} array
     */
    const poppedValue = second.pop();
    return poppedValue;
  }

  /**
   * Value that is returned from the
   * popped array at the third {@link third} array
   */
  const poppedValue = third.pop();
  return poppedValue;
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
