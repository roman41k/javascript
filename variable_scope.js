/*const value = 5;

if (true) {
   console.log("Block scope: ", value);
}

console.log("Global scope: ", value);*/

if (true) {
   const value = 5;
   console.log("Block scope: ", value);
}

console.log("Global scope: ", value);