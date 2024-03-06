favColors = ['red', 'blue', 'black'];
badColors = ['yellow', 'neon green'];

let random_favColor = Math.floor(Math.random() * favColors.length);
console.log(favColors[random_favColor]);

let random_badColor =  Math.floor(Math.random() * badColors.length);
console.log(badColors[random_badColor]);
