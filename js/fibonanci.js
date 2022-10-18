function Fibonacci(n) {
  if (n <= 1) return 1;

  return Fibonacci(n-1) + Fibonacci(n-2);
}

function checkFibonacci(number) {
  var i = 1;

  while(Fibonacci(i) < number) {i++}

  return (Fibonacci(i) === number)
} 
 module.exports = checkFibonacci ;   