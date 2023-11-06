import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {getDBConnection, getDreams} from '../data/db-service';
import Dream from '../custom/Dream';
import Menu from '../components/Menu';
import Trash from '../components/Trash';

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
      <Menu />
      <View>
        <ScrollView>
          <View style={styles.mainView}>
            {dreams.map((dream: Dream) => (
              <View key={dream.ID} style={styles.dreamView}>
                <Text>Titre : {dream.TITLE}</Text>
                <Text>Description : {dream.DESC}</Text>
                <Trash />
              </View>
            ))}
          </View>
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
  svgPlacement: {
    justifyContent: 'center',
    textAlign: 'center',
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
