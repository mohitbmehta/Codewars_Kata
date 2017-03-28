function filter_list(l) {
  // Return a new array with the strings filtered out
  var filtered = l.filter(isNumber);
  return filtered;
}
function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}