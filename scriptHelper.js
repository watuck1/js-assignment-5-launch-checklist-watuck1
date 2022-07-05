// Write your helper functions here!
//  require('isomorphic-fetch');


const destInfo = document.getElementById("#missionTarget");
const h2 = document.createElement("h2");
const h2Text = document.createTextNode("Mission Destination");
h2.appendChild(h2Text);
// destInfo.appendChild(h2);
const ol = document.createElement("ol");
const li1 = document.createElement("li");
const li1Text = document.createTextNode("Name: ");
const li2 = document.createElement("li");
const li2Text = document.createTextNode("Diameter: ");
const li3 = document.createElement("li");
const li3Text = document.createTextNode("Star: ");
const li4 = document.createElement("li");
const li4Text = document.createTextNode("Distance from Earth: ");
const li5 = document.createElement("li");
const li5Text = document.createTextNode("Number of Moons: ");
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);
ol.appendChild(li5);



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /* missionTarget.innerHTML.replace
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

  
  // destInfo.getElementByTagName("h2").innerHTML = "MissionDestination";
  // const destInfo = document.getElementById("#missionTarget");
console.log(name);
let destName = name;
   document.querySelector("li").textContent = 'Name: ${destName}'; 
  // li1Text.append("item1");

}






  let validation;
  function validateInput(testInput) {
   
    if (testInput.value === "" ) {
        validation = "Empty";
      }  else if (isNaN(testInput.value) === true  && isNaN(Number(testInput.value))=== true) {
          validation = "Not a Number";
      }  else {
          validation = "Is a Number";
      } return validation;
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotGo;
  let copilotGo;
  let fuelGo;
  let cargoGo;
  document.querySelector("#faultyItems").style.visibility = "visible"; 
  validateInput(pilot);
    if (validation === "Empty"){
      alert (`Pilot field is  ${validation}`);
    } else if (validation  === "Is a Number") {
      document.querySelector("#pilotStatus").textContent = `Pilot is not ready for launch`;
      pilotGo = "No";
      alert(`Pilot is  not ready`);
    } else if (validation  === "Not a Number") {
      document.querySelector("#pilotStatus").textContent = `Pilot ${pilot.value} is ready for launch`;
      pilotGo = "Yes";
      alert('Pilot is ready');
    }
   validateInput(copilot);
   if (validation === "Empty"){
    alert (`Copilot field is  ${validation}`);
  } else if (validation  === "Is a Number") {
    document.querySelector("#copilotStatus").textContent = `Co-Pilot is not ready for launch`;
    copilotGo = "No";
    alert(`Copilot is  not ready`);
  } else if (validation  === "Not a Number") {
    // document.querySelector("#faultyItems").style.visibility = "visible";
    // document.querySelector("#launchStatus").textContent = "Shuttle is Ready for Launch";
    // document.querySelector("#launchStatus").style.color = "green";
    document.querySelector("#copilotStatus").textContent = `Co-Pilot ${copilot.value} is ready for launch`;
    copilotGo = "Yes";
    alert('Copilot is ready'); 
  }
  validateInput(fuelLevel);
  if (validation === "Empty"){
   alert (`Fuel level field is  ${validation}`);
 } else if (validation  === "Not a Number") {
    alert(`Fuel level is  not ready`);
 } else if (validation  === "Is a Number" && fuelLevel.value < 10000) {
  document.querySelector("#fuelStatus").textContent = "There is not enough fuel for the journey";
  fuelGo = "No";
  alert('Fuel level is too low');
 } else {
    document.querySelector("#fuelStatus").textContent = "There is enough fuel for the journey";
    fuelGo = "Yes"; 
    alert('Fuel level is ready');
 }

 validateInput(cargoLevel);
 if (validation === "Empty"){
  alert (`Cargo level field is  ${validation}`);
} else if (validation  === "Not a Number") {
    alert(`Cargo level is  not ready`);
} else if (validation  === "Is a Number" && cargoLevel.value > 10000) {
  document.querySelector("#cargoStatus").textContent = "There is too much mass for the Shuttle to launch";
  cargoGo = "No";
  alert('Cargo level is too high'); 
} else {
  document.querySelector("#cargoStatus").textContent = "Cargo mass low enough for launch";
  cargoGo = "Yes";
  alert('Cargo is ready');
}
if (pilotGo === "Yes" && copilotGo === "Yes" && fuelGo === "Yes" && cargoGo === "Yes") {
    document.querySelector("#launchStatus").textContent = "Shuttle is Ready for Launch";
    document.querySelector("#launchStatus").style.color = "green";
} else {
    document.querySelector("#launchStatus").textContent = "Shuttle Not Ready to Launch";
    document.querySelector("#launchStatus").style.color = "red";
}
}

async function myFetch() {
  let json = [];
  let planetsReturned;
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
          json = response.json();
          })
    return json;
}

function pickPlanet(planets) {
  let planetList = [];
  planetList = planets;
  let selectedPlanet;
  let randNum = Math.floor(Math.random()*6);
  selectedPlanet = planetList[randNum];
  return selectedPlanet;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
