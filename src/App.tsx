import React, {useEffect} from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Home from './pages/Home';
import CreateDream from './pages/CreateDream';
import MyDreams from './pages/MyDreams';
import {getDBConnection, initiateDB} from './data/db-service';

function App() {
  useEffect(() => {
    getDBConnection()
      .then(cnx => initiateDB(cnx))
      .catch(e => console.log(e));
  }, []);

  return (
    <NativeRouter>
      <Routes>
        <Route path="*" Component={Home} />
        <Route path="/dream/:isNightmare" Component={CreateDream} />
        <Route path="/dreams/:isNightmare" Component={MyDreams} />
      </Routes>
    </NativeRouter>
  );
}

export default App;
