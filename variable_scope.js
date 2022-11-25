/*const value = 5;

if (true) {
   console.log("Block scope: ", value);
}

console.log("Global scope: ", value);

if (true) {
   const value = 5;
   console.log("Block scope: ", value);
}

console.log("Global scope: ", value);*/

const global = "global";

if (true) {
   const blockA = "block A";
   
   console.log(global);
   console.log(blockA);
   
   /*console.log(blockB);
   console.log(blockC);*/
   
   if (true) {
      const blockB = "block B";
      
      console.log(global);
      console.log(blockA);
      console.log(blockB);
      
      /*console.log(blocC);*/
   }
}

if (true) {
   const blockC = "blockC";
   
   console.log(global);
   console.log(blockC);
   
   //console.log(blockA);
   //console.log(blockB);
}

console.log(global);

/*console.log(blockA);
console.log(blockB);
console.log(blockC);*/

