module.exports = function flatten(arr) {
  var flattened = [];
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      flattened = flattened.concat(flatten(arr[i]));
    }else{
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
