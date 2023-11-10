import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    marginTop: hp('6%'),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    fontVariant: ['small-caps'],
  },
});

export default Header;
