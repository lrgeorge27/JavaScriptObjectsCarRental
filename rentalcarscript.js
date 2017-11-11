var cars = {
name: "Enterprise Car Rental", 
types: ['economy', 'midsize'],
economy: 80,
//econBooked: 0,
midsize: 150,
//midBooked: 0,
}

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
}

function econAvail() {
    //cars.econBooked++;
    cars.economy--;
    document.getElementById("econAvail").innerHTML = cars.economy; //- cars.econBooked;
}

function midAvail() {
    //cars.midBooked++;
    cars.midsize--;
    document.getElementById("midAvail").innerHTML = cars.midsize; // - cars.midBooked;
}

function getCars() {
  document.getElementById("econCars").innerHTML  = cars.types[0];
  document.getElementById("midCars").innerHTML = cars.types[1];
  document.getElementById("econAvail").innerHTML = cars.economy; // - cars.econBooked;
  document.getElementById("midAvail").innerHTML = cars.midsize //- cars.midBooked;
}