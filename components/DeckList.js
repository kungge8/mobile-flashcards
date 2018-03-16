//display list of currently made decks & # of cards in each deck
//each deck links to individual deck view by stack

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckList extends Component {

  render () {
    return (
      <View style = {styles.container}>
        <TouchableOpacity>
          <Text>ON DeckList</Text>
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

export default connect( null )(DeckList);