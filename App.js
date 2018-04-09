/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Consumer } from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import {
  ListItem,
  Text,
  Thumbnail,
  Left,
  Title,
  Card,
  CardItem,
  Body,
  Header
} from 'native-base';
import Container from './theme/components/Container';
import Content from './theme/components/Content';
import Button from './theme/components/Button';

const data = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
  {
    id: 11
  },
  {
    id: 12
  },
  {
    id: 13
  },
  {
    id: 14
  },
  {
    id: 15
  }
];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
class App extends Component<Props> {
  renderMap = ({ item, index }) => {
    const a = true;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('./pexels-photo-415829.jpeg')} />
            <Body>
              <Text>Nguyen Anh Tuan</Text>
              <Text note>Jumping</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <MapView
            scrollEnabled={false}
            pitchEnabled={false}
            cacheEnabled
            toolbarEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            showsBuildings={false}
            showsTraffic={false}
            showsCompass={false}
            showsMyLocationButton={false}
            showsPointsOfInterest={false}
            mapType="standard"
            region={{
              latitude: 37.8025259 + index,
              longitude: -122.4351431 + index,
              latitudeDelta: 0.09,
              longitudeDelta: 0.09
            }}
            provider="google"
            style={{ width: null, height: 200, flex: 1 }}
          >
            <Polyline
              coordinates={[
                {
                  latitude: 37.8025259 + index,
                  longitude: -122.4351431 + index
                },
                {
                  latitude: 37.7896386 + index,
                  longitude: -122.421646 + index
                },
                {
                  latitude: 37.7665248 + index,
                  longitude: -122.4161628 + index
                },
                {
                  latitude: 37.7734153 + index,
                  longitude: -122.4577787 + index
                },
                {
                  latitude: 37.7948605 + index,
                  longitude: -122.4596065 + index
                },
                {
                  latitude: 37.8025759 + index,
                  longitude: -122.4351731 + index
                },
                {
                  latitude: 37.8025859 + index,
                  longitude: -122.4351831 + index
                },
                {
                  latitude: 37.8025959 + index,
                  longitude: -122.4351931 + index
                }
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000'
              ]}
              strokeWidth={3}
            />
          </MapView>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button title="Comment" onPress={() => alert('comment')} />
          </Left>
        </CardItem>
      </Card>
    );
  };
  render() {
    return (
      <Content>
        <Header>
          <Left>
            <Button title="Theme" onPress={() => this.props.toggleTheme()} />
          </Left>
          <Body>
            <Title>Maps example</Title>
          </Body>
        </Header>
        <FlatList
          data={data}
          key="v"
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={this.renderMap}
          initialNumToRender={2}
        />
        <Button title="Change theme" onPress={() => alert('change theme')} />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default Container(App);
