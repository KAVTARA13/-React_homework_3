import Axios from 'axios';

const FakerUrl = process.env.REACT_APP_FAKER_API;

export const getFakerBooks = async ({ quantity = 1 }) => {
  try {
    const response = await Axios.get(`${FakerUrl}/books?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return undefined;
  }
};
