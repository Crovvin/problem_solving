// add whatever parameters you deem necessary
function averagePair(array, number) {
  let begin = 0; 
  let end = array.length - 1;
  while (begin < end) {
    let average = (array[begin] + array[end]) / 2;
    if (average === number) {
      return true;
    } else if (average < number) {
      begin++;
    } else {
        end--;
    }
  }
  return false;
}
