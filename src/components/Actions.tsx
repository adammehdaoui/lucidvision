import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function Actions() {
  return (
    <View>
      <Link to="/dream/0" style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un rêve</Text>
      </Link>

      <Link to="/dream/1" style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un cauchemar</Text>
      </Link>

      <Link to="/dreams/0" style={styles.actionButton}>
        <Text style={styles.actionText}>Mes rêves</Text>
      </Link>

      <Link to="/dreams/1" style={styles.actionButton}>
        <Text style={styles.actionText}>Mes cauchemars</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '65%',
    marginLeft: '18%',
    marginBottom: '5%',
    padding: 20,
  },
  actionText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Actions;
