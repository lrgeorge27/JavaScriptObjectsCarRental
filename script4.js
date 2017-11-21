var cars = {
    types: [{
            name: 'economy',
            available: 3,
            price: '$80'
        },
        {
            name: 'midsize',
            available: 10,
            price: "$100",
        },
        {
            name: 'luxury',
            available: 5,
            price: "$120"
        }
    ],
    name: "Lauren's Rent - A - Car",
};
var rental = {
    economy: [],
    midsize: [],
    luxury: []
};

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
};

var selection = document.getElementById('carSelection');
for (var i = 0; i < cars.types.length; i++) {
    console.log("start");
    var n = cars.types[i].name;
    var car = document.createElement('OPTION');
    car.value = i;
    car.innerHTML = n;
    console.log("stop");
    selection.appendChild(car);
}

function displayDetails(i) {
    console.log("hello");
    console.log(i);
    document.getElementById("price").innerHTML = cars.types[i].price;
    document.getElementById("available").innerHTML = cars.types[i].available;

}

// function getCars() {
//     var car = document.getElementById("carSelection").value;
//     switch (car) {
//         case "economy":
//             cars.economy--;
//             document.getElementById("econAvail").innerHTML = "Economy:" + cars.economy;
//             document.getElementById("econ").innerHTML = "Economy:" + cars.priceEcon;
//             break;
//         case "midsize":
//             cars.midsize--;
//             document.getElementById("midAvail").innerHTML = "Midsize:" + cars.midsize;
//             document.getElementById("mid").innerHTML = "Midsize:" + cars.priceMid;
//             break;
//         case "luxury":
//             cars.luxury--;
//             document.getElementById("luxAvail").innerHTML = "Luxury:" + cars.luxury;
//             document.getElementById("lux").innerHTML = "Luxury:" + cars.priceLux;
//             break;
//     }
// }

// function addRenter() {
//     var selection = document.forms["renter"]["carSelection"].value;
//     var renter = document.forms["renter"]["name"].value;
//     var economy = cars.economy;
//     var midsize = cars.midsize;
//     var luxury = cars.luxury;

//     if (economy <= 0) {
//         alert("That selection is not available. Please make a different selection");
//         console.log(economy);
//     }

//     else if (midsize <= 0) {
//         alert("That selection is not available. Please make a different selection");
//         console.log(midsize);
//     }
//     else if (luxury <= 0) {
//         alert("That selection is not available. Please make a different selection");
//         console.log(luxury);
//     }
//     else if (selection == "blank") {
//         alert("Please select type");
//         console.log(selection);
//     }
//     else if (renter == "") {
//         alert("Please enter name");
//         console.log(renter);
//     }
//     else {
//         rental[selection].push({
//             name: renter
//         });
//         document.getElementById("display").innerHTML = "Thank you for your reservation!";
//         console.log(rental);
//     }
//     return false;
// }
