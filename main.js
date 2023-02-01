const prompt = require('prompt-sync')({sigint: true});

console.log('Welcome to my color calculator!');

console.log('Do you want to combine or deconstruct colors?');
let choice = prompt('Enter "combine" or "deconstruct": ');

if ( choice === "combine" || choice === "deconstruct") {
} else {
  console.log("Error 404 - Please try again");
  return;
}

if (choice === 'combine'){
    let color1 = prompt('Enter the first color: ');
    let color2 = prompt('Enter the second color: ');
    if (color1 === 'red' && color2 === 'blue'){
        console.log('purple');
    } else if (color1 === 'red' && color2 === 'yellow'){
        console.log('orange');
    } else if (color1 === 'blue' && color2 === 'yellow'){
        console.log('green');
    } else {
        console.log('error');
    }
}

if (choice === 'deconstruct'){
    let color = prompt('Enter the color: ');
    if (color === 'purple'){
        console.log('red + blue');
    } else if (color === 'orange'){
        console.log('red + yellow');
    } else if (color === 'green'){
        console.log('blue + yellow');
    } else {
        console.log('error');
    }
}
