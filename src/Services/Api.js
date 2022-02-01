import axios from 'axios';

const API_KEY = '25408556-374265389b1c642a0a0776986';
const URL = 'https://pixabay.com/api/';


export const getImages = (text,count) => {
    try {

        //Use Of Template String
        const data=axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`);

        return data;

    } catch (error) {
        console.log(error)
    }
}

