import axios from "axios";

// const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_KEY = "KUV4twdTRl_cGZNGrPRpKulwP2hUJB8b7db6y9eqOuY";
const BASE_URL = "https://api.unsplash.com";

const fetchImages = async (query, per_page = 12, page = 1) => {
  // console.log("API_KEY:", API_KEY);

  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page,
        // client_id: API_KEY,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
