import axios from 'axios'

export const getLocations = () => {
    return axios ({
        method: 'GET',
        url: 'https://services.marinetraffic.com/api/exportvesseltrack/cf8f05df0b57bfae43e762cc61fd381239c4c042/v:3/period:hourly/days:3/mmsi:241486000/protocol:json',
    })
}





