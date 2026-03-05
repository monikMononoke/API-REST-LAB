import React from 'react';
import { ThemeProviderComponent } from '#core/theme';
import { RouterComponent } from '#core/router';
import './styles.css';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  );
};

export default AppProviders;
