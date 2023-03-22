// add whatever parameters you deem necessary
function separatePositive(numbers) {
  let begin = 0;
  let end = numbers.length - 1;
  while (begin < end) {
    if (numbers[begin] < 0 && numbers[end] > 0) {
      var clone = numbers[begin];
      numbers[begin] = numbers[end];
      numbers[end] = clone;
      begin += 1;
      end -= 1;
    } else {
      if (numbers[begin] > 0) begin += 1;
      else end -= 1;
    }
  }
  return numbers;
}