const prompt = require ('prompt-sync')({sigint: true});

let p = "purple";
let o = "orange";
let g = "green";
let r = "red";
let b = "blue";
let y = "yellow";

console.log('Welcome!!');

let input = prompt('input your color(s): ');

let color1 = [r, b, y];
let color2 = [p, o, g];

if (!input.includes(color1) || !input.includes(color2)) {
    console.log('Error 404 - Please try again');
    return;
}


if (input === p){
    console.log('Your deconstructed colors are: ' +r+ ' + ' +b+'.');
} else if (input === o){
    console.log('Your deconstructed colors are: ' +r+ ' + ' +y+'.');
} else if (input === g){
    console.log('Your deconstructed colors are: ' +b+ ' + ' +y+'.');
} else if (input === r + ' ' + b){
    console.log('Your combined colors give: ' +p+'.');
} else if (input === r + ' ' + y){
    console.log('Your combined colors give: ' +o+'.');
} else if (input === b + ' ' + y){
    console.log('Your combined colors give: ' +g+'.');
} else {
    console.log('error');
}
