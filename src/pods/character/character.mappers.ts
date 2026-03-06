import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  char: apiModel.Character
): viewModel.Character => ({
  id: char.id,
  name: char.name,
  status: char.status,
  species: char.species,
  type: char.type,
  created: char.created,
  episode: char.episode,
  gender: char.gender,
  image: char.image,
  location: char.location,
  origin: char.origin,
  url: char.url,
});
