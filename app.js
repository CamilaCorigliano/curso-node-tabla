import { crearArchivoTxt } from "./helpers/multiplicar.js";
import { argv } from "./config/yargs.js";
import colors from 'colors';

console.clear();

crearArchivoTxt(argv.b, argv.l, argv.h)
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
     .catch( err => console.log(err));
     
     




