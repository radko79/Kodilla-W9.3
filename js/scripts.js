// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);

var dinosaur = 'triceratops';

var	upperCaseText = dinosaur.toUpperCase();
console.log(upperCaseText);

var	replaceVelociraptor = text.replace('Velociraptor', upperCaseText);
console.log(replaceVelociraptor);

var newtext = replaceVelociraptor.substring(0, replaceVelociraptor.length/2);
console.log(newtext);

//console.log((replaceVelociraptor.length)/2);

