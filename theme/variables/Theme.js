import React from 'react';
import dark from './dark';
import light from './light';

export const themes = {
  light,
  dark
};
export const ThemeContext = React.createContext(themes.dark);
