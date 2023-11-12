import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Lucid Void</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    padding: 50,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
    fontVariant: ['small-caps'],
  },
});

export default Header;
