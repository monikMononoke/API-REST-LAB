import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/character/:id',
};

interface Routes extends Omit<SwitchRoutes, 'character'> {
  character: (id: string) => string;
}

export const linkRoutes: Routes = {
  ...switchRoutes,
  character: (id: string) => generatePath(switchRoutes.character, { id }),
};

