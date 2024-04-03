/* eslint-disable */

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
  let loopCombination = "";
  for (let i = 0; i < firstWordOfDomain.length; i++) {
    for (let a = 0; a < secondWordOfDomain.length; a++) {
      for (let b = 0; b < domain.length; b++) {
        loopCombination =
          firstWordOfDomain[i] + " " + secondWordOfDomain[a] + " " + domain[b];
      }
    }

    console.log(i);
  }

  //declaring function
  let generateDomain = () => {
    let firstWordOfDomain = ["Focus", "Concentration", "Power"];
    let secondWordOfDomain = ["Factor", "Camp", "House"];
    let domain = [".com", ".io", ".org"];

    //declaring the randomIndex
    let firstIndx = [Math.floor(Math.random() * firstWordOfDomain.length)];
    let secondIndx = [Math.floor(Math.random() * secondWordOfDomain.length)];
    let domainIndx = [Math.floor(Math.random() * domain.length)];

    let random =
      firstWordOfDomain[firstIndx] +
      " " +
      secondWordOfDomain[secondIndx] +
      " " +
      domain[domainIndx];

    let continuous = random;
    return random;
  };
};
