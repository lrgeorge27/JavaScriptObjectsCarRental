var cars = {
    name: "Enterprise Car Rental", 
    types: ['economy', 'midsize'],
    economy: 80,
    //econBooked: 0,
    midsize: 150,
    //midBooked: 0,
    };


window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
    };

document.getElementById("econRent").onclick = function() {
    //cars.econBooked++;
    cars.economy--;
    document.getElementById("econAvail").innerHTML = cars.economy; //- cars.econBooked;
};

document.getElementById("midRent").onclick = function() {
    //cars.midBooked++;
    cars.midsize--;
    document.getElementById("midAvail").innerHTML = cars.midsize; // - cars.midBooked;
};

document.getElementById("update").onclick = function() {
  document.getElementById("econCars").innerHTML  = cars.types[0];
  document.getElementById("midCars").innerHTML = cars.types[1];
  document.getElementById("econAvail").innerHTML = cars.economy; // - cars.econBooked;
  document.getElementById("midAvail").innerHTML = cars.midsize; //- cars.midBooked;
};
