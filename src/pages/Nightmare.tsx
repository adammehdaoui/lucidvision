import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function Nightmare() {
  return (
    <View style={styles.homeView}>
      <Link to="/">
        <Text style={styles.homeText}>Create a nightmare</Text>
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

export default Nightmare;
