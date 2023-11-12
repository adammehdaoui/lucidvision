import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Actions({navigation}: any) {
  const navigateToDream = (nightmare: boolean) => {
    navigation.navigate('Dream', {nightmare});
  };

  const navigateToDreams = (nightmare: boolean) => {
    navigation.navigate('Dreams', {nightmare});
  };

  return (
    <View style={styles.actionView}>
      <TouchableOpacity
        onPress={() => navigateToDream(false)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Add a dream</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDream(true)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>Add a nightmare</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDreams(false)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>My dreams</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToDreams(true)}
        style={styles.actionButton}>
        <Text style={styles.actionText}>My nightmares</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionView: {
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
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
