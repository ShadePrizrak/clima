const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



let getInfo = async(direccion) => {
    try {
        let Coordenadas = await lugar.getCoordenadas(direccion);
        let temp = await clima.getClima(Coordenadas.latitud, Coordenadas.longitud);

        return `El clima en ${direccion} es:  Maxima= ${temp.maxima} y Minima=${temp.minima}`
    } catch (error) {
        throw new Error(`No se pudo determinar el clima en ${direccion}`)
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))