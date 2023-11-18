import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {getDBConnection, getDreams, deleteDream} from '../data/db-service';
import Dream from '../custom/Dream';
import Trash from '../components/Trash';
import Edit from '../components/Edit';

function MyDreams({route, navigation}: any) {
  const theme = useColorScheme();
  const [dreams, setDreams] = useState<Dream[]>([]);
  const {nightmare} = route.params;

  const updateDreams = useCallback(
    function () {
      getDBConnection()
        .then(cnx => getDreams(cnx, nightmare))
        .then(dreamsFromDB => setDreams(dreamsFromDB))
        .catch(e => console.log(e));
    },
    [nightmare],
  );

  useEffect(() => {
    updateDreams();
  }, [updateDreams]);

  const handleDelete = useCallback(
    function (id: number) {
      getDBConnection()
        .then(cnx => deleteDream(cnx, id))
        .catch(e => console.log(e));
      updateDreams();
    },
    [updateDreams],
  );

  const handleUpdate = (id: number) => {
    navigation.navigate('UpdateDream', {id});
  };

  function dateUSToLocaleDate(date: string): string {
    const dateToConvert = new Date(date);
    const dateString = dateToConvert.toLocaleDateString();
    return dateString;
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={
        theme === 'dark'
          ? require('../assets/gradient-dark.png')
          : require('../assets/gradient.png')
      }>
      <View>
        {dreams.length === 0 ? (
          <View style={styles.noDreamView}>
            <Text style={styles.noDreamText}>
              You didn't save any {nightmare === true ? 'nightmare' : 'dream'}
            </Text>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.mainView}>
              {dreams.map((dream: Dream) => (
                <View key={dream.ID} style={styles.dreamView}>
                  <Text>Type : {dream.ISNIGHTMARE ? 'Cauchemar' : 'Rêve'}</Text>
                  <Text>Date : {dateUSToLocaleDate(dream.DATE)}</Text>
                  <Text>Title : {dream.TITLE}</Text>
                  <Text>Description : {dream.DESC}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => handleDelete(dream.ID)}
                      style={styles.buttonPlacement}>
                      <Trash />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleUpdate(dream.ID)}
                      style={styles.buttonPlacement}>
                      <Edit />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonPlacement: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainView: {
    padding: 30,
  },
  noDreamView: {
    padding: 10,
    marginTop: 40,
    marginLeft: '10%',
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  noDreamText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'gray',
  },
  dreamView: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  textView: {
    fontSize: 18,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

export default MyDreams;
