// Task 1

var arr = [0,0,0,0,0,0,0,0,0,0]
for (let i = 0; i < 10; i++) {
    arr[i] = parseFloat(prompt("Enter mark: "));
}
console.log(arr,); console.log("\n________________________________________\n")
let index  = parseInt(prompt("Enter index you want to change: ")); index--;
arr[index] = parseFloat(prompt("Enter new mark: "));
console.log(arr); console.log("\n________________________________________\n")
let avg = (arr.reduce((a,b) => a+b, 0))/10;
console.log("mark average is: " + avg);
checkOfStipend(avg);
function checkOfStipend(marks)
{
    if (marks >= 10.7)
    {
        console.log("You are have a salary");
         return true;
    }
    else{
        console.log("You are havnot a salary");
        return false;
    }
}
// Task 2

function kubik(sum_of)
{
    var res = rand(6);
    var res_2 = rand(6);

    document.getElementById ("c_drop").innerHTML = res;
    document.getElementById ("p_drop").innerHTML = res_2;

        var comp = Number(document.getElementById("c_drop").innerHTML);
        var player = Number(document.getElementById("p_drop").innerHTML);
        var res_kub = document.getElementById("res_drop");

        if(comp > player) {res_drop.innerHTML = "Loser";}
        else if(comp < player) {res_drop.innerHTML = "Winner";}
        else (res_kub.innerHTML = "_______");
}
function rand(max)
{
    return random = Math.floor((Math.random()*max) + 1);
}
