import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

export default async(config) => {
    try {
        const response = await axios(config);
        if (response) {
            const responseJSON = response.data;
            return responseJSON;
        } else {
            return {}
        }
    } catch (err) {
        throw err;
    }
};