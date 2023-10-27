import React from 'react';
import {View} from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';

function Home() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
      <View>
        <Header />
        <Actions />
        {/* <ActivityIndicator /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});

export default Home;
