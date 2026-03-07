import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Avatar from '@mui/material/Avatar';

import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { linkRoutes } from '#core/router/routes';
import { Link } from 'react-router';
import { StatusIndicator } from '#common/components';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const isAlive = (status: string): boolean => status === 'Alive';

  return (
    <Card style={{ backgroundColor: '#282c34' }}>
      <CardHeader
        avatar={<Avatar aria-label="character">{character.name[0]}</Avatar>}
      />
      <Link to={linkRoutes.character(character.id)}>
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <StatusIndicator status={character.status} />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
