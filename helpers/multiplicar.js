import * as fs from 'fs/promises';
import colors from 'colors';

export const crearArchivoTxt = async (base = 5, listar, nroHasta = 10) => {



    let salida, consola = '';

    for (let index = 1; index <= nroHasta ; index++) {
        consola += `${base} ${colors.red.bold('X')} ${index} = ${base * index}\n`;
        salida += `${base} X ${index} = ${base * index}\n`;


    }

    try {
        await fs.writeFile(`./salida/tabla-${base}.txt`, salida);
        if (listar) {
            console.log('=====================');
            console.log(`   TABLA DEL ${colors.green(base)}   `)
            console.log('=====================');
            console.log(consola);
        }

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

    

}

