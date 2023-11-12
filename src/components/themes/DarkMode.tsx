import React from 'react';
import MySVG from '../../assets/icons/moon-full.svg';
import {StyleSheet} from 'react-native';

function DarkMode() {
  return <MySVG style={styles.svgColor} width={60} height={20} />;
}

const styles = StyleSheet.create({
  svgColor: {
    marginRight: 0,
    color: 'white',
  },
});

export default DarkMode;
