import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import Header from './Header';

import WaldoLevel from '../assets/waldo/level.jpeg';
import MinecraftLevel from '../assets/minecraft/level.png';
import SpongeBobLevel from '../assets/spongebob/level.png';
import LegoLevel from '../assets/lego/level.jpeg';
import PokemonLevel from '../assets/pokemon/level.png';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [levels, setLevels] = useState([
    {
      index: 0,
      name: `Waldo`,
      levelPicture: WaldoLevel,
      characterPictures: []
    },
    {
      index: 1,
      name: `Minecraft`,
      levelPicture: MinecraftLevel,
      characterPictures: []
    }, {
      index: 2,
      name: 'SpongeBob',
      levelPicture: SpongeBobLevel,
      characterPictures: []
    },
    {
      index: 3,
      name: 'Lego',
      levelPicture: LegoLevel,
      characterPictures: []
    },
    {
      index: 4,
      name: 'Pokemon',
      levelPicture: PokemonLevel,
      characterPictures: []
    },
  ]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage levels={levels} />} />
      </Routes>
    </div>
  );
}

export default App;
