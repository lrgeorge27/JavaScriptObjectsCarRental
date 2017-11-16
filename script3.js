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

var Rental = function(name, selection) {
    this.name = name,
        this.car = selection;
};

var renter = new Rental(document.getElementById("name"), document.getElementById("carSelection"));

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
};

function getCars() {
    var car = document.getElementById("carSelection").value;

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

// function addRenter(renterName, selection) {
//     // var selection = document.getElementsByTagId("carSelection");
//     // var renterName = document.getElementById("name");
//     var rental = document.getElementsByTagName("form");
//     var text = "";
//     var i;
//     for (i = 0; i < rental.length; i++) {
//         text += rental.elements[i].value + "<br>";

//         rental.push({
//             name: renterName,
//             car: selection
//         });
//     }
//}


console.log(new Rental());
