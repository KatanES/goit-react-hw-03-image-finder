import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: 1,
      },
    });
    return response.data;

    const newImages = response.data.hits;

    if (page === 1) {
      this.setState({ images: newImages });
    } else {
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
      }));
    }
  } catch (error) {
    throw error;
  }
};
