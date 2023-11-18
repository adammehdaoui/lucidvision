import React from 'react';
import MySVG from '../assets/icons/trash.svg';
import {StyleSheet} from 'react-native';

function Trash() {
  return <MySVG style={styles.svg} width={60} height={20} />;
}

const styles = StyleSheet.create({
  svg: {
    color: 'gray',
  },
});

export default Trash;
