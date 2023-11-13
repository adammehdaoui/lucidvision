import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';
import Theme from '../components/Theme';

function Home({navigation}: any) {
  const theme = useColorScheme();

  const [indicatorAnimating, setIndicator] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIndicator(false);

      console.log(indicatorAnimating);
    }, 1000);

    return () => clearTimeout(timeoutID);
  });

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={
        theme === 'dark'
          ? require('../assets/gradient-dark.png')
          : require('../assets/gradient.png')
      }>
      <View style={styles.modePlacement}>
        <Theme />
      </View>
      <View>
        <Header />
        <Actions navigation={navigation} />
      </View>
      {indicatorAnimating ? (
        <ActivityIndicator style={styles.indicatorPlacement} />
      ) : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  indicatorPlacement: {
    marginTop: 20,
  },
  modePlacement: {
    marginTop: 25,
  },
});

export default Home;
