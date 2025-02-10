import { knightMoves } from "./factory.js";

const start = [0,0];
const end = [3,3];

console.log("--- Knight moves from", start, "to", end, "---");
console.log(knightMoves(start, end)); 