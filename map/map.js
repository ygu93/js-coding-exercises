module.exports = function map(arr, fn, ctx){
  var newArr = [];
  for(var i=0;i<arr.length;i++){
    if(ctx){
      var newVal = fn.call(ctx, arr[i])
    }else{
      var newVal = fn(arr[i], i, arr);
    }
    newArr.push(newVal);
  }
  return newArr;
}
