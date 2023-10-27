import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function Dream() {
  return (
    <View style={styles.homeView}>
      <Link to="/">
        <Text style={styles.homeText}>Create a dream</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 20,
  },
});

export default Dream;
