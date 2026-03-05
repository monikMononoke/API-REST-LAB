import React from 'react';

import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <div>
            <h2>{character.name}</h2>
          </div>
          <div>
            {character.image ? (
              <img
                className={classes.image}
                src={character.image}
                alt={character.name}
              />
            ) : null}
          </div>
        </div>
        <div>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};
