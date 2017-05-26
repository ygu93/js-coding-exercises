module.exports = function binarySearch(arr, target) {
  var length = arr.length;
  if(length < 1){
    return -1;
  }
  var mid_idx = Math.floor(length/2);
  if(arr[mid_idx] === target){
    return mid_idx;
  }else if(arr[mid_idx] < target){
    var answer = binarySearch(arr.slice(mid_idx+1), target)
    if(answer === -1){
      return -1;
    }else{
      return answer + mid_idx + 1;
    }
  }else{
    return binarySearch(arr.slice(0, mid_idx), target);
  }
}
