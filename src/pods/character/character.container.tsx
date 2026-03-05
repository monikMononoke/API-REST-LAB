import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();

  const loadCharacter = async () => {
    await api.getCharacter(id).then((result) => setCharacter(result));
  };

  React.useEffect(() => {
    loadCharacter();
  }, [id]);

  return <CharacterComponent character={character} />;
};
