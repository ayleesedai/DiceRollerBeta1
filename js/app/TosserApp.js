import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TossingFilterContainer from '../containers/TossingFilterContainer.js';

export default class TosserApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
		  MAS Experience: Tosser (DAIS Roller)
		</Text>
		<TossingFilterContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'column',
    backgroundColor: '#000000',
  },
  header: {
	color: '#FF0000',
	fontSize: 25,
	textAlign: 'center',
  }
});
