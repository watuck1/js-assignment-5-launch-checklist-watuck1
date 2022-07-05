
// Write your JavaScript code here!

 window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
        listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
   }).then(function () {
    let planet = pickPlanet(listedPlanets);
    console.log(pickPlanet(listedPlanets));
    console.log(planet.name);
    
    addDestinationInfo(missionTarget, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
  })
  
    const form = document.querySelector("form");  
    form.addEventListener("submit", (event) => {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let pilotValue = pilot.value;
    let copilotValue = copilot.value;
    let fuelValue = fuelLevel.value;
    let cargoValue = cargoLevel.value;
    let list = "";
    if (pilotValue === "" || copilotValue === "" || fuelValue === "" || cargoValue === "") {
      alert("All fields are required!");
      event.preventDefault();
      } else {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
      }  
    })
        
 })

