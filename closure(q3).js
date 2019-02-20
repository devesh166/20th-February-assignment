function sum(a) {

  var sum = a

  function f(b) {
    sum += b
    return f  //<- from second call, f is returned each time
              //   function sum basically got "overridden" by f
  }

  f.toString = function() { return sum }

  return f //<- after first call, f is returned
}

console.log( sum(1)(2)(3)(4)(5).toString() )
