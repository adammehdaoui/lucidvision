import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import CreateDream from './pages/CreateDream';
import MyDreams from './pages/MyDreams';
import {getDBConnection, initiateDB} from './data/db-service';

function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    getDBConnection()
      .then(cnx => initiateDB(cnx))
      .catch(e => console.log(e));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dream" component={CreateDream} />
        <Stack.Screen name="Dreams" component={MyDreams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
