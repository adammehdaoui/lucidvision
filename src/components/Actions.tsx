import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Actions({navigation}: any) {
  const navigateToDream = (isNightmare: boolean) => {
    navigation.navigate('Dream', {isNightmare});
  };

  const navigateToDreams = (isNightmare: boolean) => {
    navigation.navigate('Dreams', {isNightmare});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigateToDream(false)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un rêve</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDream(true)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Ajout d'un cauchemar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDreams(false)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Mes rêves</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDreams(true)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Mes cauchemars</Text>
      </TouchableOpacity>
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
