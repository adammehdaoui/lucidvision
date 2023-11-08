import React, {useEffect} from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import CreateDream from './pages/CreateDream';
import MyDreams from './pages/MyDreams';
import {getDBConnection, initiateDB} from './data/db-service';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    getDBConnection()
      .then(cnx => initiateDB(cnx))
      .catch(e => console.log(e));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" Component={Home} />
        <Stack.Screen name="Dream" Component={CreateDream} />
        <Stack.Screen name="Dreams" Component={MyDreams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
