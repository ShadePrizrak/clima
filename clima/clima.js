const axios = require('axios')

const getClima = async(lat, lng) => {

    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8d5cc6eca58de6e83bc88352e9b5fe64`);

    return {
        minima: result.data.main.temp_min,
        maxima: result.data.main.temp_max
    }


}

module.exports = {
    getClima
}