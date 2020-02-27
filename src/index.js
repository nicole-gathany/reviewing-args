function uniteUnique(arr) {
let newArray = [];
let args = [...arguments];
console.log(args);
newArray.push(args[0][0])
for(let i=0; i<args.length; i++){
  for(let j=0; j<args[i].length; j++){

if(!newArray.includes(args[i][j])){
  newArray.push(args[i][j])
}


  }
}
return newArray;
}
 

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
