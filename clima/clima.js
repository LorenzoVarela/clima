const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1d32a9e79e98c8bd8a55fa1ee7790b2e&units=metric`);

    return resp.data.main.temp;

}

const getClimaDireccion = async(direccion) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${direccion}&appid=1d32a9e79e98c8bd8a55fa1ee7790b2e&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima,
    getClimaDireccion
}