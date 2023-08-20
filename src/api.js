import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

export const fetchImages = async () => {
  try {
    const response = await axios.get('/', {
      params: {
        key: API_KEY,
        q: 'all',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
