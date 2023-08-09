var random = Math.floor(Math.random() * 100);
var limit = parseInt(1);
console.log(random);
document.getElementById("click-button").addEventListener("click", func);
function func() {
    var data = document.getElementById("in").value; if (data == "") {
        alert("Enter some number");
    }
    else {
        if (limit <= 10) {
            if (random == data) {
                document.getElementById("life").innerHTML = "";
                document.getElementById("res").innerHTML = "You won the game";
                limit = 12;
            } else {
                if (random > parseInt(data)) {
                    document.getElementById("life").innerHTML = "Your guess low you have " + (11 - limit) + " life remaining ";
                    limit++;
                }
                else {
                    document.getElementById("life").innerHTML = "Your guess high you have " + (11 - limit) + " life remaining ";
                    limit++;
                }
            }
        }

        else {
            limit = parseInt(0);
            window.location.href = "home2.html";
        }


    }
}
