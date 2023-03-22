// add whatever parameters you deem necessary
function constructNote(string, letters) {
  const messageTimes = {};
  const lettersTimes = {};
  for (let char of string) {
    messageTimes[char] = ++messageTimes[char] || 1;
  }
  for (let char of letters) {
    lettersTimes[char] = ++lettersTimes[char] || 1;
  }
  for (let char in messageTimes) {
    if (!lettersTimes[char]) {
      return false;
    }
    if (messageTimes[char] > lettersTimes[char]) {
      return false;
    }
  }
  return true;
}
