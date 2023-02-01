const prompt = require('prompt-sync')({sigint: true});

console.log('Welcome to my color calculator!');
let colors = prompt('Enter a color or two colors separated by a space: ');

if (colors.includes(' ')) {
let [color1, color2] = colors.split(' ');
if (color1 === 'red' && color2 === 'blue'){
console.log('purple');
} else if (color1 === 'red' && color2 === 'yellow'){
console.log('orange');
} else if (color1 === 'blue' && color2 === 'yellow'){
console.log('green');
} else {
console.log('error');
}
} else {
if (colors === 'purple'){
console.log('red + blue');
} else if (colors === 'orange'){
console.log('red + yellow');
} else if (colors === 'green'){
console.log('blue + yellow');
} else {
console.log('error');
}
}