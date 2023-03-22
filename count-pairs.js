// add whatever parameters you deem necessary
function countPairs(array, number) {
    array.sort((a, b) => a - b);
    let begin = 0;
    let end = array.length - 1;
    let count = 0;
    while (begin < end) {
        let sum = array[begin] + array[end];
        if (sum === number) {
            count++;
            begin++;
            end--;
        } else if (sum < number) {
            begin++;
        } else {
            end--;
        }
    }
    return count;
}
