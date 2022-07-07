// Write your helper functions here!
//  require('isomorphic-fetch');





function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div. 
//  let div = document.querySelector("missionTarget");  
   missionTarget.innerHTML = `
    
      <h2>Mission Destination</h2>
        <ol>
          <li>Name: ${name}</li>
          <li>Diameter: ${diameter}</li>
          <li>Star: ${star}</li>
          <li>Distance from Earth:  ${distance}</li>
          <li>Number of Moons: ${moons}</li>
          <img src = ${imageUrl}> </img>
        </ol>
 
`
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
    } else if (validation  === "Is a Number") {
      pilotGo = "Wait";
    } else if (validation  === "Not a Number") {
      document.querySelector("#pilotStatus").textContent = `Pilot ${pilot.value} is ready for launch`;
      pilotGo = "Yes";
    }
   validateInput(copilot);
   if (validation === "Empty"){
  } else if (validation  === "Is a Number") {
    copilotGo = "Wait";
  } else if (validation  === "Not a Number") {
    document.querySelector("#copilotStatus").textContent = `Co-Pilot ${copilot.value} is ready for launch`;
    copilotGo = "Yes";
  }
  validateInput(fuelLevel);
  if (validation === "Empty"){
 } else if (validation  === "Not a Number") {
  fuelGo = "Wait";
} else if (validation  === "Is a Number" && fuelLevel.value < 10000) {
  document.querySelector("#fuelStatus").textContent = "There is not enough fuel for the journey";
  fuelGo = "No";
 } else {
    document.querySelector("#fuelStatus").textContent = "There is enough fuel for the journey";
    fuelGo = "Yes"; 
 }

 validateInput(cargoLevel);
 if (validation === "Empty"){
} else if (validation  === "Not a Number") {
  cargoGo = "Wait";
} else if (validation  === "Is a Number" && cargoLevel.value > 10000) {
  document.querySelector("#cargoStatus").textContent = "There is too much mass for the Shuttle to launch";
  cargoGo = "No";
} else {
  document.querySelector("#cargoStatus").textContent = "Cargo mass low enough for launch";
  cargoGo = "Yes";
}
if (pilotGo === "Yes" && copilotGo === "Yes" && fuelGo === "Yes" && cargoGo === "Yes") {
    document.querySelector("#launchStatus").textContent = "Shuttle is Ready for Launch";
    document.querySelector("#launchStatus").style.color = "green";
    document.querySelector("#pilotStatus").style.visibility = "visible"; 
    document.querySelector("#copilotStatus").style.visibility = "visible"; 
    document.querySelector("#fuelStatus").style.visibility = "visible"; 
    document.querySelector("#cargoStatus").style.visibility = "visible"; 
  



  } else if(pilotGo === "Wait" || copilotGo === "Wait" || fuelGo === "Wait" || cargoGo === "Wait") {
     document.querySelector("#launchStatus").textContent = "Awaiting Information Before Launch";
     document.querySelector("#launchStatus").style.color = "black";
     document.querySelector("#pilotStatus").style.visibility = "hidden"; 
     document.querySelector("#copilotStatus").style.visibility = "hidden"; 
     document.querySelector("#fuelStatus").style.visibility = "hidden"; 
     document.querySelector("#cargoStatus").style.visibility = "hidden";
     alert(`Make sure to enter valid information for each field!`);

}


else {
    document.querySelector("#launchStatus").textContent = "Shuttle Not Ready to Launch";
    document.querySelector("#launchStatus").style.color = "red";
    document.querySelector("#pilotStatus").style.visibility = "visible"; 
    document.querySelector("#copilotStatus").style.visibility = "visible"; 
    document.querySelector("#fuelStatus").style.visibility = "visible"; 
    document.querySelector("#cargoStatus").style.visibility = "visible"; 

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

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.myFetch = myFetch;
module.exports.pickPlanet = pickPlanet; 
