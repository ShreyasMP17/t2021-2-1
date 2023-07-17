const program4 = (input , multi) =>{
  const result = {};

  for(num of multi) {
    result[num] = input.filter(i => i % num === 0).length;
  };
  return result;
};

const input = [1,2,8,9,12,46,76,82,15,20,30];
const multi = [1,2,3,4,5,6,7,8,9];

const total = program4(input, multi);
console.log(total);
