import axios from 'axios';
// import { toast } from 'react-hot-toast';

const BASE_URL = 'https://648cedf38620b8bae7ed7e1b.mockapi.io/';
axios.defaults.baseURL = BASE_URL;

export async function getAll() {
  try {
    const response = await axios.get('/users');
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getOne(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    console.log(response.data)
    return response.data;
  
  } catch (error) {
    console.log(error.message);
  }
}

export async function getSubscriptions() {
  try {
    const response = await axios.get('/subscriptions');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addSubscription(mySub) {
  try {
    const response = await axios.post('/subscriptions', mySub);
    console.log(response.data)
    return response.data;
  
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteSubscription(id) {
  try {
    const response = await axios.delete(`/subscriptions/${id}`);
    console.log(response.data)
    return response.data;
  
  } catch (error) {
    console.log(error.message);
  }
}

// export async function addOrder(newOrder) {
//   try {
//     const { data } = await axios.post(`orders/order`, newOrder);
//     toast.success('Thanks for your order! Successfully added!');
//     return data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       const errorMessage = error.response.data.message;
//       toast.error(errorMessage);
//       return errorMessage;
//     } else {
//       toast.error(error.message);
//       return error.message;
//     }
//   }
// }