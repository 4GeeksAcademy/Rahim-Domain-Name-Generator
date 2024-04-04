let firstWordOfDomain = ["Focus", "Concentration", "Power"];
let secondWordOfDomain = ["Factor", "Camp", "House"];
let domain = [".com", ".io", ".org"];

let generateDomain = () => {
  let firstIndx = Math.floor(Math.random() * firstWordOfDomain.length);
  let secondIndx = Math.floor(Math.random() * secondWordOfDomain.length);
  let domainIndx = Math.floor(Math.random() * domain.length);

  let random =
    firstWordOfDomain[firstIndx] +
    " " +
    secondWordOfDomain[secondIndx] +
    " " +
    domain[domainIndx];

  return random;
};

let generateCombinations = () => {
  let loopCombination = "";
  for (let i = 0; i < firstWordOfDomain.length; i++) {
    for (let a = 0; a < secondWordOfDomain.length; a++) {
      for (let b = 0; b < domain.length; b++) {
        loopCombination +=
          firstWordOfDomain[i] +
          " " +
          secondWordOfDomain[a] +
          " " +
          domain[b] +
          "<br>";
      }
    }
  }
  //console.log(loopCombination);
};

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
  setInterval(() => {
    document.querySelector("#domain").innerHTML = generateDomain();
    generateCombinations();
  }, 5000);
};
