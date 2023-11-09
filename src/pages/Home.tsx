import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';
import {StackNavigationProp} from '@react-navigation/stack';

interface HomeProps {
  navigation: StackNavigationProp<any>; // Update this with your stack navigator type
}

function Home({navigation}: HomeProps) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/gradient.jpeg')}>
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
