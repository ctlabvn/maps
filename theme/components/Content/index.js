import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from '../../variables/Theme';

type Props = {
  children: element,
  style: number | object,
  contentContainerStyle: number | object,
  testID: string
};

export default class Content extends React.Component<Props> {
  render() {
    const { children, style, contentContainerStyle } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <KeyboardAvoidingView
            style={[
              { backgroundColor: theme.Content.backgroundColor },
              style && style
            ]}
            contentContainerStyle={contentContainerStyle}
          >
            {children}
          </KeyboardAvoidingView>
        )}
      </ThemeContext.Consumer>
    );
  }
}
