module.exports = function debounce(func, delay){
  var timer = null;

  return function(...args){
    clearTimeout(timer);
    var context = this;
    timer = setTimeout(() => func.apply(context, args), delay);

  }
}
