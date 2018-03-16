import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { createStore(reducer)}>
        <DeckView />
      </Provider>
    );
  }
}

const Stack = StackNavigator ({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
