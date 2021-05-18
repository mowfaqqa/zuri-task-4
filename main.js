// calculate results (Number 1)
function convertFahrToCelsius(parameter) {

  const toCelsFormula = (parameter - 32) / 1.8
  const varType = typeof parameter
  
  
  if(isFinite(toCelsFormula)) {
    console.log(toCelsFormula.toFixed(4));
        
} else {
  console.log(`${toCelsFormula} is not a valid number but a ${varType}`);
}

}

convertFahrToCelsius({1:1})


