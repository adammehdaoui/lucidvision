import React from 'react';
import {View, Appearance, TouchableOpacity} from 'react-native';
import DarkMode from './themes/DarkMode';
import LightMode from './themes/LightMode';

function Theme() {
  const theme = Appearance.getColorScheme();

  function handlePress() {
    Appearance.setColorScheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {Appearance.getColorScheme() === 'dark' ? <DarkMode /> : <LightMode />}
      </TouchableOpacity>
    </View>
  );
}

export default Theme;
