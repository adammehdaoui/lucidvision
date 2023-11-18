import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Dream from '../custom/Dream';
import {getDBConnection, getDreamByID} from '../data/db-service';

function UpdateDream({route}: any) {
  const {dreamID} = route.params;
  console.log('dreamID', dreamID);

  const dream: Dream = getDBConnection()
    .then(cnx => getDreamByID(cnx, dreamID))
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });

  return <Text> Salut </Text>;
}

export default UpdateDream;
