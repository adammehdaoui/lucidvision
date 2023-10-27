import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Routes, Route, Link} from 'react-router-native';
import Dream from '../pages/Dream';
import Nightmare from '../pages/Nightmare';

function Actions() {
  return (
    <View>
      <Routes>
        <Route path="/dream" Component={Dream} />
        <Route path="/nightmare" Component={Nightmare} />
      </Routes>

      <Link to="/dream" style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un rêve</Text>
      </Link>

      <Link to="/nightmare" style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un cauchemar</Text>
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
