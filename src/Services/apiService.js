// src/services/apiService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await apiClient.get(endpoint, options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.message);
    throw new Error(`Error fetching data from ${endpoint}`);
  }
};

export const fetchLargeCards = () => fetchData("/largeCards");
export const fetchMediumCards = () => fetchData("/mediumCards");
export const fetchSmallCards = () => fetchData("/smallCards");
export const fetchSection2Cards = () => fetchData("/section2Cards");
export const fetchSection3Small = () => fetchData("/section3small");
export const fetchMediumVideoCards = () => fetchData("/mediumvideocards");
export const fetchSection4Small = () => fetchData("/section4small");
