import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import {getDBConnection, getDreams} from '../data/db-service';
import Dream from '../interfaces/Dream';

function MyDreams() {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    getDBConnection()
      .then(cnx => getDreams(cnx))
      .then(dreamsFromDB => setDreams(dreamsFromDB))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.homeView}>
      <Link to="/">
        <Text style={styles.homeText}>MyDreams</Text>
      </Link>

      {dreams.map((dream: Dream) => (
        <View>
          <Text>Titre : {dream.TITLE}</Text>
          <Text>Description : {dream.DESC}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 20,
  },
});

export default MyDreams;
