function highAndLow(numbers){
  var j = numbers.split(' ');
  return Math.max.apply(null,j)+" "+Math.min.apply(null,j);
}