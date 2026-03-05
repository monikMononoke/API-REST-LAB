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
      <CardContent>
        <div className={classes.content}>
          <Link to={linkRoutes.character(character.id)}>
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
          </Link>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            {isAlive(character.status) ? (
              <span>
                <div
                  style={{
                    backgroundColor: 'green',
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    display: 'inline-block',
                  }}
                ></div>
              </span>
            ) : (
              <div
                style={{
                  backgroundColor: 'red',
                  height: '20px',
                  width: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              ></div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
