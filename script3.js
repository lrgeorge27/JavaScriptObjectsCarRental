var cars = {
	name: "Enterprise Car Rental",
	types: ['economy', 'midsize'],
	economy: 80,
	//econBooked: 0,
	midsize: 150,
	//midBooked: 0,
	luxury: 45,
	priceEcon: '$80',
	priceMid: "$100",
	priceLux: "$120"
    };

var rental = [
    {
    name: "",
    car: "",
    }
    ];
  
window.onload = function() {
	document.getElementById("busName").innerHTML = cars.name;
};

function getCars() {
	var car= document.getElementById("carSelection").value
	
	switch (car) {

	case "economy":
	cars.economy--;
	document.getElementById("econAvail").innerHTML = "Economy:" + cars.economy;
	document.getElementById("econ").innerHTML = "Economy:" + cars.priceEcon;
    break;

    case "midsize":
	cars.midsize--;
	document.getElementById("midAvail").innerHTML = "Midsize:" + cars.midsize;
	document.getElementById("mid").innerHTML = "Midsize:" + cars.priceMid;
     break;

	case "luxury":
	cars.luxury--;
	document.getElementById("luxAvail").innerHTML = "Luxury:" + cars.luxury;
	document.getElementById("lux").innerHTML = "Luxury:" + cars.priceLux;
    break;
    }
}

  function addRenter() {
        rental.push({
            name: "name",
            car: "carSelection".value
        });
        console.log("click");
        }


