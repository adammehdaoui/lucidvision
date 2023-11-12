import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  useColorScheme,
} from 'react-native';
import {getDBConnection, insertDream} from '../data/db-service';
import Theme from '../components/Theme';

function CreateDream({route, navigation}: any) {
  const theme = useColorScheme();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const {nightmare} = route.params;

  const handleAdd = useCallback(
    function () {
      getDBConnection()
        .then(cnx => insertDream(cnx, title, description, nightmare))
        .catch(e => console.log(e));

      navigation.navigate('Dreams', {nightmare: nightmare});
    },
    [title, description, nightmare, navigation],
  );

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={
        theme === 'dark'
          ? require('../assets/gradient-dark.png')
          : require('../assets/gradient.png')
      }>
      <SafeAreaView style={styles.mainView}>
        <TextInput
          enablesReturnKeyAutomatically
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title"
          placeholderTextColor={'gray'}
          style={styles.titleView}
        />
        <TextInput
          multiline
          enablesReturnKeyAutomatically
          maxLength={1000}
          onChangeText={text => setDescription(text)}
          value={description}
          placeholder="Description"
          placeholderTextColor={'gray'}
          style={styles.descView}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.modePlacement}>
        <Theme />
      </View>
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
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '50%',
  },
  descView: {
    fontSize: 18,
    textAlign: 'center',
    padding: 75,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '90%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
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
  modePlacement: {
    marginTop: 265,
  },
});

export default CreateDream;
