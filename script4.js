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

function displayDetails() {
    console.log("hello");
    // console.log(i);
    var n = [parseInt(document.getElementById("carSelection").value)]; //take what value gives and turn into integer
    cars.types[n].available--;
    document.getElementById("price").innerHTML = cars.types[n].price;
    document.getElementById("available").innerHTML = cars.types[n].available;

}

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


function addRenter() {
    //document.getElementById("renter").onsubmit = function() 
    var n = [parseInt(document.getElementById("carSelection").value)]; //take what value gives and turn into integer
    var avail = cars.types[n].available;
    var selection = cars.types[n].name //document.forms["renter"]["carSelection"].value;
    var renter = document.forms["renter"]["name"].value;

    if (avail <= 0) {
        alert("That selection is unavailable. Please make a new selection.");
        console.log(avail);
    }
    else if (selection == "") {
        alert("Please make a selection.");
        console.log(selection);
    }

    else if (renter == "") {
        alert("Please enter name.");
        console.log(renter);
    }
    else {
        rental[selection].push({
            name: renter
        });
        document.getElementById("display").innerHTML = "Thank you for your reservation." //ing a" + cars.types[parseInt("carSelection")].name + ".";
        console.log(rental);
    }
    return false;
}



//     // var economy = cars.economy;
//     // var midsize = cars.midsize;
//     // var luxury = cars.luxury;

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
//     else if (renter == "") {
//         alert("Please enter name");
//         console.log(renter);
//     }
