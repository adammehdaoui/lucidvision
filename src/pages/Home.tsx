import React from 'react';
import {View, StyleSheet, ImageBackground, useColorScheme} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';
import Theme from '../components/Theme';

function Home({navigation}: any) {
  const theme = useColorScheme();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={
        theme === 'dark'
          ? require('../assets/gradient-dark.png')
          : require('../assets/gradient.png')
      }>
      <View>
        <Header />
        <Actions navigation={navigation} />
      </View>
      <View style={styles.modePlacement}>
        <Theme />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  modePlacement: {
    marginTop: 60,
  },
});

export default Home;
