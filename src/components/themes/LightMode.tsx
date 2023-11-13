import React from 'react';
import MySVG from '../../assets/icons/moon-empty.svg';
import {StyleSheet} from 'react-native';

function LightMode() {
  return <MySVG style={styles.svgColor} width={60} height={20} />;
}

const styles = StyleSheet.create({
  svgColor: {
    color: 'black',
  },
});

export default LightMode;
