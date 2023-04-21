import axios from 'axios';

export const login = async (user) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/user/login`, user);
    const token = response.data.body.token;
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signup = async (user) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/user/signup`, user);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/user/profile`,
      {}, // Ajoutez un objet vide pour les données de la requête
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data.body;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const modifyProfile = async (user, token) => {
  try {
    await axios.put(`${process.env.API_URL}/user/profile`, user, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
