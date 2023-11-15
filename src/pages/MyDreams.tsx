import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {getDBConnection, getDreams, deleteDream} from '../data/db-service';
import Dream from '../custom/Dream';
import Trash from '../components/Trash';

function MyDreams({
  route,
  backgroundImage,
}: {
  route: any;
  backgroundImage: any;
}) {
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

  function dateUSToLocaleDate(date: string): string {
    const dateToConvert = new Date(date);
    const dateString = dateToConvert.toLocaleDateString();
    return dateString;
  }

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
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
                  <TouchableOpacity onPress={() => handleDelete(dream.ID)}>
                    <Trash />
                  </TouchableOpacity>
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
