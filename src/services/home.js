import axios from 'axios'

const API_HOST = process.env.API_HOST

require('../security/interceptors')

const saveCompany = (data) => {
    return axios.post(`${API_HOST}/api/v1/setup/company`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

const checkCompanyExist = () => {
    return axios.get(`${API_HOST}/api/v1/setup/company/checkCompanyExist`)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

export default {
    saveCompany,
    checkCompanyExist
}
