const axios = require('axios');



const getCoordenadas = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad ${direccion}`)
    }

    let Posicion = result.data.results[0]
    let coors = Posicion.geometry.location;

    return {
        direccion: Posicion.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
}

module.exports = {
    getCoordenadas
}