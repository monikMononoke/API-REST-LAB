import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  char: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: String(char.id),
  name: char.name,
  status: char.status,
  species: char.species,
  type: char.type,
  gender: char.gender,
  origin: {
    name: char.origin.name,
    url: char.origin.url,
  },
  location: {
    name: char.location.name,
    url: char.location.url,
  },
  image: char.image,
  episode: char.episode,
  url: char.url,
  created: char.created,
});
