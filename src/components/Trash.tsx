import React from 'react';
import MySVG from '../assets/icons/trash.svg';
import {StyleSheet} from 'react-native';

function Trash() {
  return <MySVG style={styles.placement} width={60} height={20} />;
}

const styles = StyleSheet.create({
  placement: {
    marginTop: 10,
    marginLeft: '40%',
    color: 'gray',
  },
});

export default Trash;
