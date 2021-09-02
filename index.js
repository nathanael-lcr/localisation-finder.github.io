const userposition$ = document.getElementById("boilerplate");

let position1 = [];

//Collect the position
function myFunction () {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        userposition$ = alert("You need to allow localisation");
    }
}

//Create the position sentence
function showPosition (position) {
    position1.push("Latitude : " + position.coords.latitude + " Longitude : " + position.coords.longitude );

    return resultLocalisation() ;
}

//Make the position appear on screen
function resultLocalisation () {
    if (position1.length > 0) {
        document.getElementById("result").innerHTML = position1;
    }
}

/*
    Made by Nathanaël Lecron
*/
