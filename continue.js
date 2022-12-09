const number = 10;

for (let i = 0; i < number; i +=1) {
   if (i % 2 === 0) {
      continue;
   }
   
   console.log("Odd i:", i);
}