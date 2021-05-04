import axios from 'axios';
import i18n from 'i18next';

const API_BASE = 'https://pokeapi.co/api/v2/';

export const getGenerations = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}generation`);
    return data;
  } catch (error) {
    alert(i18n.t('generalApiError'));
    console.error(error);
  }
};

export const makeGetRequest = async (url: string) => {
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch (error) {
    alert(i18n.t('generalApiError'));
    console.error(error);
  }
};
