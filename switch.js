let cost;
const subscription = "premium";

switch (subscription) {
   case "free":
      cost = 0;
      break;
   
   case "pro":
      cost = 100;
      break;
      
   case "premium":
      cost = 500;
      break;
      
   default:
      console.log("Invalid subbscription type");
}

console.log(cost);