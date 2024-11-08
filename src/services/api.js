import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const BASE_URL = "https://api.unsplash.com";

const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 10,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
