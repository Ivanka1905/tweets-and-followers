import axios from 'axios';

const BASE_URL = 'https://648cedf38620b8bae7ed7e1b.mockapi.io/';
axios.defaults.baseURL = BASE_URL;

export async function getAll(page) {
  try {
    const response = await axios.get('/users', {
      params: {
        page: page,
        limit: 3,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getOne(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updFollowers(id, newFollowersCount) {
  try {
    const response = await axios.put(`/users/${id}`, newFollowersCount);
    return response.data;
  } catch (error) {
    console.error('Помилка оновлення даних про followers:', error);
  }
}

export async function getSubscriptions() {
  try {
    const response = await axios.get('/subscriptions');
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
