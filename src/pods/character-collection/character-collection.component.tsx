import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characters: CharacterEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characters } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characters.map((char) => (
          <li key={char.id}>
            <CharacterCard character={char} />
          </li>
        ))}
      </ul>
    </div>
  );
};
