for (let i = 0; i <= 5; i += 1) {
  console.log(i);
  
  if (i === 3) {
     console.log("We found the number 3, we interrupt the execution of the cycle");
     break
  }
}

console.log("Log after the cycle");