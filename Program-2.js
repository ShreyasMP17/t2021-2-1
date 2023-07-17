const program2 =(a)=> {
    const output = [];
    let number = 1;
  
    while (output.length < a) {
      output.push(number);
      number += 2;
    }

    return output;
  }
  
  
  const examples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (const a of examples) {
    const series = program2(a);
    console.log(`input a = ${a}, then output: ${series.join(", ")}`);
  }
