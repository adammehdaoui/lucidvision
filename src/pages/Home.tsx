import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';

function Home({navigation}: any) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.png')}>
      <View>
        <Header />
        <Actions navigation={navigation} />
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
