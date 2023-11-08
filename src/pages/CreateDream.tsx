import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useParams, useNavigate} from 'react-router-native';
import {getDBConnection, insertDream} from '../data/db-service';
import Menu from '../components/Menu';

function CreateDream() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const {isNightmare} = useParams();
  const nightmare = isNightmare === '0' ? false : true;

  const navigate = useNavigate();

  function handleAdd() {
    const listRoot = `/dreams/${isNightmare}`;

    getDBConnection()
      .then(cnx => insertDream(cnx, title, description, nightmare))
      .catch(e => console.log(e));

    navigate(listRoot);
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
      <Menu />
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
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
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
