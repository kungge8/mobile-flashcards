//Display title, # of cards in deck, start quiz, add question

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {

  render () {
    return (
      <View style = {styles.container}>
        <TouchableOpacity>
          <Text>ON DECKVIEW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//styling
const styles = StyleSheet.create({
  container: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect( null )(DeckView);