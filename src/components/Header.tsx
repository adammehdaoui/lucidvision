import React from 'react';
import {View, Text, StyleSheet, DimensionValue} from 'react-native';

function Header({
  appName,
  hp,
}: {
  appName: string;
  hp: (arg: string) => DimensionValue;
}) {
  const styles = StyleSheet.create({
    headerView: {
      padding: 50,
    },
    headerText: {
      marginTop: hp('6%'),
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      fontVariant: ['small-caps'],
    },
  });

  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{appName}</Text>
    </View>
  );
}

export default Header;
