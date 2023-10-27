import React, {useEffect} from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Home from './pages/Home';
import Dream from './pages/Dream';
import Nightmare from './pages/Nightmare';
import {
  getDBConnection,
  createDreams,
  insertDream,
  getDreams,
} from './data/db-service';

function App() {
  useEffect(() => {
    getDBConnection()
      .then(cnx => createDreams(cnx))
      .catch(error => {
        console.log(error);
      });

    getDBConnection()
      .then(cnx => insertDream(cnx, 'Mon premier rêve', 'Test'))
      .catch(error => {
        console.log(error);
      });

    getDBConnection()
      .then(cnx => getDreams(cnx))
      .then(dreams => {
        console.log(dreams);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <NativeRouter>
      <Routes>
        <Route path="*" Component={Home} />
        <Route path="/dream" Component={Dream} />
        <Route path="/nightmare" Component={Nightmare} />
      </Routes>
    </NativeRouter>
  );
}

export default App;
