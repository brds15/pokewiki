import axios from 'axios';
import FallbackImage from '../../images/pokeballcolor.png';

const API_BASE = 'https://pokeres.bastionbot.org/';

export const getPokeImage = async (pokeId: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}images/pokemon/${pokeId}.png`);
    return data;
  } catch (error) {
    console.error(error);
    return FallbackImage;
  }
};
