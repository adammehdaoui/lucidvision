import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './src/components/Header';
import Actions from './src/components/Actions';

function App() {
  const appName: string = 'Lucid Vision';

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./src/assets/gradient.jpeg')}>
      <Header appName={appName} hp={hp} />
      <Actions />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

export default App;
