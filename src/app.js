/* eslint-disable */

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
  console.log("Hello Rigo from the console!");
};
//declaring function
let generateDomain = () => {
  let firstWordOfDomain = ["Focus", "Concentration", "Power"];
  let secondWordOfDomain = ["Factor", "Camp", "House"];
  let domain = [".com", ".io", ".org"];

  //declaring the randomIndex
  let firstIndx = [Math.floor(Math.random() * firstWordOfDomain.length)];
  let secondIndx = [Math.floor(Math.random() * secondWordOfDomain.length)];
  let domainIndx = [Math.floor(Math.random() * domain.length)];

  return (
    firstWordOfDomain[firstIndx] +
    " " +
    secondWordOfDomain[secondIndx] +
    " " +
    domain[domainIndx]
  );
};
