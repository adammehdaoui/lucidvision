import React, {useState, useEffect, useCallback} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TextInput,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Dream from '../custom/Dream';
import {getDBConnection, getDreamByID} from '../data/db-service';

function UpdateDream({route}: any) {
  const theme = useColorScheme();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const backgroundImage =
    theme === 'dark'
      ? require('../assets/gradient-dark.png')
      : require('../assets/gradient.png');
  const {dreamID} = route.params;

  const fetchDream = useCallback(async () => {
    getDBConnection()
      .then(cnx => getDreamByID(cnx, dreamID))
      .then(dream => {
        setTitle(dream.TITLE);
        setDescription(dream.DESC);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }, [dreamID]);

  useEffect(() => {
    fetchDream();
  }, [fetchDream]);

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
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
    marginTop: 25,
  },
});

export default UpdateDream;
