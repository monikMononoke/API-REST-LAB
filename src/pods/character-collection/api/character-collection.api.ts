import { Character } from './character-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<Character[]> => {
  return await Axios.get(url).then((response) => response.data.results);
};
