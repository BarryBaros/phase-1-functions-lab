// Code your solution in this file!
// Line 1: Function declaration that takes in a parameter called pickupLocation.
// Line 2: Declares a constant variable named hqLocation and assigns a value of 42 to it.
// Line 3: Calcualtes the difference between the pickup location and the headquater's location using Math.abs to ensure the result is ALWAYS POSITIVE.
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

const distance = distanceFromHqInBlocks(30);
console.log(distance);

// Line 1: Function declaration that takes in a parameter called pickupLocation.
// Line 2: This line calls the distanceFromHqInBlocks function with the pickupLocation parameter. It assigns the result to the variable feetFromHq and calculates the distance in blocks from pickup location to Scubers HQ.
// Line 3: Declares a constant variable named eachBlock and assigns it the value 264 which is the number of feet of each block.
// Line 4: multiplies the number of blocks (feetFromHq) by the length of each block in feet (eachBlock).
// Line 5: calls the distanceFromHqInFeet function with the argument 40 (pickup location). It assigns the result to the variable feet.
// Line 6: Prints the value of the feet variable to the console.
function distanceFromHqInFeet(pickupLocation) {
    const feetFromHq = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return feetFromHq * feetPerBlock;
}
const feet = distanceFromHqInFeet(40);
console.log(feet);



function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start); //The end of the journey minus the starting point.
    const feetPerBlock = 264; //each block is 264feet
    const distanceInFeet = distanceInBlocks * feetPerBlock; //to get the distance covered in feet, you multiply distanceInBlocks by feetPerBlock
    return distanceInFeet;
}
const start = 42;
const destination = 44;
const distanceTravelled = distanceTravelledInFeet(start, destination);
console.log(distanceTravelled);


function calculatesFarePrice(startPoint, endPoint) {
  let dist = distanceTravelledInFeet(startPoint, endPoint);
  let price = 0;
  const setPrice = 25;
  if (dist <= 400) {
    return price = 0;
  } else if (dist <= 2000) {
    return price = (dist - 400) * 2 / 100;
  } else if (dist <= 2500) {
   return price = setPrice;
  } else {
    return 'cannot travel that far';
  }
  return price;
}

const startPoint = 34; // starting point
const endPoint = 32; // destination point
const farePrice = calculatesFarePrice(startPoint, endPoint);
console.log(farePrice);

