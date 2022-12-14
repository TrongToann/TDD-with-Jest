function Combination(k, n) {

  if(k == 0 || k == n || n == 1) return 1
  
  return Combination(k - 1, n - 1) + Combination (k, n - 1)
}

function PascalRectangle(n) {
  if (n < 0 || n > 5) {
    throw new Error("Invalid Number") ; 
  }
  var array = [] ; 
        for(var i = 0; i <= n; i++) {
            array.push(Combination(i, n)) ; 
        }
  return array ; 
}
module.exports = PascalRectangle ;