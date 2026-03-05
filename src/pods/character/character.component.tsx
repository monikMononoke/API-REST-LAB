import React from 'react';

import { Character, Location, Origin } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <h1>{character.name}</h1>
      {character.image ? (
        <img src={character.image} alt={character.name} />
      ) : null}
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </>
  );
};
