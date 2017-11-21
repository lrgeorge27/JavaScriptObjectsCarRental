var cars = {
    name: "Enterprise Car Rental",
    types: [{
            name: 'economy',
            economy: 3,
            priceEcon: '$80'
        },
        {
            name: 'midsize',
            midsize: 10,
            priceMid: "$100",
        },
        {
            name: 'luxury',
            luxury: 5,
            priceLux: "$120"
        }
    ]
};
var rental = {
    economy: [],
    midsize: [],
    luxury: []
};

window.onload = function() {
    document.getElementById("busName").innerHTML = cars.name;
};

//var selection = document.createElement('SELECT');
for (var i = 0; i < cars.types.length; i++) {
    console.log("start");
    var car = document.createElement('OPTION');
    car.setAttribute("id", "select" + [i]);
    car.setAttribute("value", "car" + [i]);
    console.log("stop");
    //document.getElementById("select").innerHTML = cars.types[i].name;
    //document.getElementById("carSelection").appendChild(car);
}
//console.log(document.getElementById("option").nodeName);

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

function addRenter() {
    var selection = document.forms["renter"]["carSelection"].value;
    var renter = document.forms["renter"]["name"].value;
    var economy = cars.economy;
    var midsize = cars.midsize;
    var luxury = cars.luxury;

    if (economy <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(economy);
    }

    else if (midsize <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(midsize);
    }
    else if (luxury <= 0) {
        alert("That selection is not available. Please make a different selection");
        console.log(luxury);
    }
    else if (selection == "blank") {
        alert("Please select type");
        console.log(selection);
    }
    else if (renter == "") {
        alert("Please enter name");
        console.log(renter);
    }
    else {
        rental[selection].push({
            name: renter
        });
        document.getElementById("display").innerHTML = "Thank you for your reservation!";
        console.log(rental);
    }
    return false;
}
