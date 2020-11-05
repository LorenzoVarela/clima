const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    //    const options = {
    //        method: 'GET',
    //        url: 'https://rapidapi.p.rapidapi.com/latlon.php',
    //        params: { location: encodedUrl },
    //        headers: {
    //            'x-rapidapi-key': 'c02000a6e3msh68e198114de7419p1fbcc7jsnf79d3c0d0b6d',
    //            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    //        }
    //    }
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': 'c02000a6e3msh68e198114de7419p1fbcc7jsnf79d3c0d0b6d'
                //'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    //    instans.get()
    //        .then(resp => {
    //            console.log(resp.data.Results[0]);
    //        })
    //        .catch(err => {
    //            console.log('ERROR!!!!!', err);
    //        });

    return {
        direccion,
        lat,
        lng
    };

}

module.exports = {
    getLugarLatLng
}