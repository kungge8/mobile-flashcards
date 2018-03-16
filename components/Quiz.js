//runs through quiz:
//display question -> view answer flips card
//user inputs correct/incorrect, app tallies and shows % correct at end of quiz

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {

  render () {
    return (
      <View style = {styles.container}>
        <TouchableOpacity>
          <Text>ON Quiz</Text>
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

export default connect( null )(Quiz);