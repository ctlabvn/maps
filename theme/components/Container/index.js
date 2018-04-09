import React from 'react';
import { ThemeContext, themes } from '../../variables/Theme';

type Props = {
  children: element
};

const Container = WrappedComponent => {
  return class extends React.Component {
    state = {
      theme: themes.dark
    };

    toggleTheme = () =>
      this.setState(prev => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark
      }));

    render() {
      return (
        <ThemeContext.Provider value={this.state.theme}>
          <WrappedComponent toggleTheme={this.toggleTheme.bind(this)} />
        </ThemeContext.Provider>
      );
    }
  };
};

export default Container;
