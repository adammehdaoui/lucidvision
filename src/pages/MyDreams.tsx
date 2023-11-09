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
import Menu from '../components/Menu';
import Trash from '../components/Trash';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from '../custom/types';
import {RouteProp} from '@react-navigation/native';

interface MyDreamsProps {
  navigation: StackNavigationProp<RootStackParamList>; // Update with your actual types
  route: RouteProp<RootStackParamList, 'Dreams'>; // Update with your actual types
}

const MyDreams: React.FC<MyDreamsProps> = ({navigation, route}) => {
  const [dreams, setDreams] = useState<Dream[]>([]);
  // const {isNightmare} = useParams();
  // const nightmare = isNightmare === '0' ? false : true;
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

  function handleDelete(id: number) {
    getDBConnection()
      .then(cnx => deleteDream(cnx, id))
      .catch(e => console.log(e));

    updateDreams();
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
      <Menu />
      <View>
        {dreams.length === 0 ? (
          <View style={styles.noDreamView}>
            <Text style={styles.noDreamText}>
              Vous n'avez enregistré aucun rêve.
            </Text>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.mainView}>
              {dreams.map((dream: Dream) => (
                <View key={dream.ID} style={styles.dreamView}>
                  <Text>Type : {dream.ISNIGHTMARE ? 'Cauchemar' : 'Rêve'}</Text>
                  <Text>Date : {dream.CREATIONDATE}</Text>
                  <Text>Titre : {dream.TITLE}</Text>
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
};

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
    marginLeft: '15%',
    width: '75%',
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  noDreamText: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  dreamView: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#ebf2ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
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
