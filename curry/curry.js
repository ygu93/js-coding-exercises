module.exports = function curry(func) {
  return function currier(...args){
    if(args.length >= func.length) {
      return func.apply(null, args)
    }else{
      return function(newArgs){
        return currier.apply(null, args.concat(newArgs))
      };
    }
  };
}
