function howManyHundreds(num){
  if(num % 100 ){
    let amount = num / 100
    return Math.floor(amount)
  } else if(num === 100 || num === 200) {
    return num / 100
  } else {
    return 0
  }

}

console.log(howManyHundreds(200))