import axios from "axios";
export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:
        'Client-ID nmIy5Y5I4ATfN_hMTaGW1tKhgmJrRkRKXNThOFnvXEE'
    }
});

