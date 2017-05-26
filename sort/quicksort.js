module.exports = function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for(var i=1;i<arr.length;i++){
    if(arr[i] > pivot){
      right.push(arr[i]);
    }else{
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}
