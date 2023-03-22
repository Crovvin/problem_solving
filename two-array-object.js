// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  return keys.reduce((object, cur, index) => {
    object[cur] = index < values.length ? values[index] : null;
    return object;
  }, {});
}
