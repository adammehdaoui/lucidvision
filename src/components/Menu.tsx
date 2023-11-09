import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Menu() {
  return (
    // <Link to="/" style={styles.menuView}>
    //   <Text style={styles.buttonStyle}>Accueil</Text>
    // </Link>
    <Text>Salut</Text>
  );
}

const styles = StyleSheet.create({
  menuView: {
    backgroundColor: '#ebf2ff',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonStyle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Menu;
