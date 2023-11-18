import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Dream from '../custom/Dream';
import {getDBConnection, getDreamByID} from '../data/db-service';

function UpdateDream({route}: any) {
  const {dreamID} = route.params;

  const dream: Promise<Dream> = getDBConnection()
    .then(cnx => getDreamByID(cnx, dreamID))
    .then(res => {
      if (Array.isArray(res)) {
        throw new Error(
          'Invalid response: expected a dream, got an array of multiple dreams',
        );
      }
      return res;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });

  return <Text> Salut </Text>;
}

export default UpdateDream;
