import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

// export  const payUsingPaytm = async (data) => {
//     try {
//         let response = await axios.post(`http://localhost:8000/payment`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling payment api', error);
//     }
// }

export const payUsingPaytm = async(data)=>{
    try{
        let response= await axios.post(`${URL}/payment`,data);
        return response.data;
    }catch(error){
        console.log('error while calling Oops!',error);
    }
}