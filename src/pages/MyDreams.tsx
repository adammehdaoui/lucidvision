import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {getDBConnection, getDreams} from '../data/db-service';
import Dream from '../interfaces/Dream';
import Menu from './Menu';

function MyDreams() {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    getDBConnection()
      .then(cnx => getDreams(cnx))
      .then(dreamsFromDB => setDreams(dreamsFromDB))
      .catch(e => console.log(e));
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
      <View>
        <ScrollView>
          <View style={styles.mainView}>
            {dreams.map((dream: Dream) => (
              <View key={dream.ID} style={styles.dreamView}>
                <Text>Titre : {dream.TITLE}</Text>
                <Text>Description : {dream.DESC}</Text>
              </View>
            ))}
          </View>
          <Menu />
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  dreamView: {
    padding: 20,
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
