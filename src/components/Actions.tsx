import React from 'react';
import {View, Button, Alert, TouchableOpacity, StyleSheet} from 'react-native';

function Actions() {
  return (
    <View>
      <TouchableOpacity style={styles.actionButton}>
        <Button
          title="Ajouter un rêve"
          onPress={() => Alert.alert("Ajout d'un rêve")}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Button
          title="Ajouter un cauchemar"
          onPress={() => Alert.alert("Ajout d'un cauchemar")}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '55%',
    marginLeft: '20%',
    marginBottom: '5%',
  },
});

export default Actions;
