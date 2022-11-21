let cost;
const subscription = "premium";

if (subscription === "free") {
   cost = 0;
} else if (subscription === "pro") {
   cost = 100;
} else if (subscription === "premium") {
   cost = 500;
} else {
   console.log("Invalid subscription type");
}

console.log(cost);