// Yu-Gi-OH function
function checkYuGiOh(n){
  var numberFactors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   numberFactors.push(i);
   if (n / i !== i)
    numberFactors.push(n / i);
  }
 numberFactors.sort(function(x, y)
   {
     return x - y;
    });  
     return numberFactors;
}

console.log(checkYuGiOh(20))