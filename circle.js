function getInput(){
    let input = prompt("Please give me the radius of a circle!");
    return input;
}

function calcArea(radius){
    return Math.PI*radius*radius;
}

function printArea(area, radius){
    console.log(`The radius is ${radius}`);
    console.log(`The area is ${area}`);
}


let r = getInput();
let a = calcArea(r);
printArea(a ,r);