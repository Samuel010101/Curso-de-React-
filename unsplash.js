import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID OuzAGb6ky3RRFgx2HoDdWs1S1SYk2u5xaI17UzEPUZo'
    }       
});