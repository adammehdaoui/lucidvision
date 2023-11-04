import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Link} from 'react-router-native';
import {getDBConnection, insertDream, getDreams} from '../data/db-service';

function CreateDream() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function handleAdd() {
    getDBConnection()
      .then(cnx => insertDream(cnx, title, description))
      .catch(e => console.log(e));

    getDBConnection()
      .then(cnx => getDreams(cnx))
      .then(dreamsFromDB => console.log(dreamsFromDB))
      .catch(e => console.log(e));
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
      <SafeAreaView style={styles.mainView}>
        <TextInput
          enablesReturnKeyAutomatically
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Titre"
          style={styles.titleView}
        />
        <TextInput
          multiline
          enablesReturnKeyAutomatically
          maxLength={1000}
          onChangeText={text => setDescription(text)}
          value={description}
          placeholder="Description"
          style={styles.descView}
        />
        <Link to="/dreams">
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '50%',
  },
  descView: {
    fontSize: 18,
    textAlign: 'center',
    padding: 75,
    marginTop: 20,
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '65%',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

export default CreateDream;
