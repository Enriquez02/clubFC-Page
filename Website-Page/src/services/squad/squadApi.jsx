import axios from "axios";

const API_URL = "http://localhost:7000/squad";

export const getSquad = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.squad || response.data;
  } catch (err) {
    console.error("Error fetching squad:", err.message);
    return []; // para evitar que pete el componente
  }
};
