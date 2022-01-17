let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log('Hola ' + nombre);
console.log('mi sitio web es ' + web);