module.exports = function memoize(fn){
  var cache = {};
  return function(...args){
    args.forEach(arg => {
      if(args in cache){
        return cache[args];
      }else{
        return (cache[args] = fn.apply(this, args));
      }
    })
  }
}
