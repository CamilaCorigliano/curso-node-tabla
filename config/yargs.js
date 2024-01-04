import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs( hideBin ( process.argv )).option('b', 
                                             {
                                               alias: 'base',
                                               type: 'number',
                                               demandOption: true,
                                               describe: 'Es la base de la tabla de multiplicar'
                                             })
                                             .check( (argv, options) => {
                                                  if( isNaN(argv.b) ) {
                                                       throw 'La base tiene que ser un nro.'
                                                  }
                                                  return true;
                                             })
                                             .option('l',
                                             {
                                                  alias: 'listar',
                                                  type: 'boolean',
                                                  demandOption: false,
                                                  describe: 'Determina si se lista o no la info'
                                             })
                                             .option('h', 
                                             {
                                               alias: 'hasta',
                                               type: 'number',
                                               demandOption: true,
                                               describe: 'Es hasta que nro se desa multiplicar'
                                             })
                                             .check( (argv, options) => {
                                                  if( isNaN(argv.b) ) {
                                                       throw 'El hasta se debe especificar'
                                                  }
                                                  return true;
                                             })
                                             .argv