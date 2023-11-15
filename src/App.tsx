import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import CreateDream from './pages/CreateDream';
import MyDreams from './pages/MyDreams';
import {getDBConnection, initiateDB} from './data/db-service';
import {useColorScheme} from 'react-native';

function App() {
  const Stack = createNativeStackNavigator();
  const theme = useColorScheme();
  const backgroundImage =
    theme === 'dark'
      ? require('./assets/gradient-dark.png')
      : require('./assets/gradient.png');

  useEffect(() => {
    getDBConnection()
      .then(cnx => initiateDB(cnx))
      .catch(e => console.log(e));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Dream" options={{title: 'Create a dream'}}>
          {props => (
            <CreateDream {...props} backgroundImage={backgroundImage} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Dreams" options={{title: 'My dreams'}}>
          {props => <MyDreams {...props} backgroundImage={backgroundImage} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
