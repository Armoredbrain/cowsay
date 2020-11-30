const informations = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
  text: `Hello I'm ${informations.name}, i'm from ${informations.campus} campus`,
  e: 'oO',
  T: 'U',
}))