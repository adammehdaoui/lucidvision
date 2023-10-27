import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Home from './pages/Home';
import Dream from './pages/Dream';
import Nightmare from './pages/Nightmare';

function App() {
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
