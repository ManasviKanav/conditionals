// IF-ELSE

let shoppingDone = false;
let childAllowance;

if (shoppingDone === true){
    childAllowance = 10;
}
else{
    childAllowance = 5;
}
console.log(childAllowance);
// can do this without {}, the syntax would be correct. but it is recommended to use coz understanding the code becomes easier.

// more than two conditions - else if



// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change" , setWeather);

// function setWeather(){
//     const choice = select.value;

//     if (choice === 'sunny'){
//         para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//     }
//     else if (choice === 'rainy'){
//         para.textContent ="Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//     }
//     else if (choice === 'snowing'){
//         para.textContent ="The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//     }
//     else{
//         para.textContent ="It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//     }

//     // Nesting if...else -each if...else statement works completely independently of the other one.
//     const temperature = 45;
//     if (choice === "sunny") {
//       if (temperature < 86) {
//         para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//     } else if (temperature >= 86) {
//         para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//       }
//     }

// // Logical operators: AND, OR and NOT
// // && - both true
// // || - one or more true 
// // &&
// if (choice === "sunny" && temperature < 86) {
//   para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
// } else if (choice === "sunny" && temperature >= 86) {
//   para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
// }
// }




//  or

const iceCreamVanOutside = "on fire";
const houseStatus = "not";
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}

// not
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}



// Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.) 
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//SWITCH statement

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}

// Ternary operator or coditional operator
// Syntax-   condition ? run this code : run this code instead
 
const select1 = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select1.addEventListener("change", () =>
  select1.value === "black" ? update("black", "white") : update("white", "black")
);









