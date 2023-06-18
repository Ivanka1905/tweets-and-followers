import axios from 'axios';
// import { toast } from 'react-hot-toast';

const BASE_URL = 'https://648cedf38620b8bae7ed7e1b.mockapi.io/';
axios.defaults.baseURL = BASE_URL;

export async function getAll(page) {
  try {
    const response = await axios.get('/users',  {
          params: {
            'page': page,
            'limit': 3
          }
        });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getOne(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    // console.log(response.data)
    return response.data;
  
  } catch (error) {
    console.log(error.message);
  }
}

export async function updFollowers(id, newFollowersCount) {
  try {
    const response = await axios.put(`/users/${id}`, newFollowersCount );
  // console.log('Дані про followers оновлено:', response.data);
    return response.data;
  
  } catch (error) {
    console.error('Помилка оновлення даних про followers:', error);
  }
}

export async function getSubscriptions() {
  try {
    const response = await axios.get('/subscriptions');
    // console.log("getAll", response.data)
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addSubscription(subscription) {
  try {
    const response = await axios.post('/subscriptions', subscription);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteSubscription(subscriptionId) {
  try {
    const response = await axios.delete(`/subscriptions/${subscriptionId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
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