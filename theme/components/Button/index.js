import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../variables/Theme';

type Props = {
  title: string,
  onPress: func
};

export default class Button extends React.Component<Props> {
  render() {
    const { title, props, onPress } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={theme.Button}
          >
            <Text style={theme.Text}>{title}</Text>
          </TouchableOpacity>
        )}
      </ThemeContext.Consumer>
    );
  }
}
