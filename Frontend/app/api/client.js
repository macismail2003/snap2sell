import { create } from 'apisauce';

const apiClient = create({
    baseURL:'http://172.20.10.3:9000/api'
});

export default apiClient;