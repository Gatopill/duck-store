// scripts/generate-admin-code.js
const crypto = require('crypto');

// Genera 16 bytes aleatorios y los convierte a una cadena hexadecimal
const secretCode = crypto.randomBytes(16).toString('hex');

console.log('Tu nuevo código de administrador es:');
console.log(secretCode);