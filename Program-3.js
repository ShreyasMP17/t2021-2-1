const  program3 = (x)=>{
    if (x <= 0) {
      console.log("Input should be a positive integer greater than 0.");
      return;
    }
  
    let series = [];
    let currentNumber = 1;
  
    while (currentNumber <= x) {
      series.push(currentNumber);

  currentNumber += 2;
    }
  return series;
}
const examples = [1,2,3,4,5,6,7,8,9]

for(const x of examples){
const series = program3(x);
  console.log(`Input a = ${x}, then Output: ${series.join(", ")}`);
}
