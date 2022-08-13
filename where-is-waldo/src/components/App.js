import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import Header from './Header';
import LevelPage from './LevelPage/LevelPage';
import EndPage from './EndPage/EndPage';

import WaldoLevel from '../assets/waldo/level.jpg';
import Waldo from '../assets/waldo/waldo.png';
import Odlaw from '../assets/waldo/odlaw.jpg';
import Wizard from '../assets/waldo/wizard.png';

import MinecraftLevel from '../assets/minecraft/level.png';
import Diamond from '../assets/minecraft/diamond.png';
import Latern from '../assets/minecraft/lantern.png';
import WitherSkull from '../assets/minecraft/witherSkull.png';

import SpongeBobLevel from '../assets/spongebob/level.png';
import Caveman from '../assets/spongebob/cavemanSpongebob.jpg';
import Patrick from '../assets/spongebob/patrick.jpg';
import Plankton from '../assets/spongebob/plankton.png';

import LegoLevel from '../assets/lego/level.jpeg';
import BlueBlock from '../assets/lego/blueBlock.png';
import redBlock from '../assets/lego/redBlock.jpg';
import WhiteBlock from '../assets/lego/whiteBlock.jpg';

import PokemonLevel from '../assets/pokemon/level.png';
import Gardevoir from '../assets/pokemon/Gardevoir.png';
import Pikachu from '../assets/pokemon/pikachu.jpg';
import Kyogre from '../assets/pokemon/kyogre.png';

function App() {
  const [levels, setLevels] = useState([
    {
      index: 0,
      name: `Waldo`,
      levelPicture: WaldoLevel,
      characters: [
        { src: Waldo, name: 'Waldo', found: false },
        { src: Odlaw, name: 'Odlaw', found: false },
        { src: Wizard, name: 'Wizard', found: false }
      ],
    },
    {
      index: 1,
      name: `Minecraft`,
      levelPicture: MinecraftLevel,
      characters: [
        { src: Diamond, name: 'Diamond', found: false },
        { src: Latern, name: 'Lantern', found: false },
        { src: WitherSkull, name: 'Wither Skull', found: false }
      ]
    }, {
      index: 2,
      name: 'SpongeBob',
      levelPicture: SpongeBobLevel,
      characters: [
        { src: Patrick, name: 'Patrick', found: false },
        { src: Caveman, name: 'Caveman SpongeBob', found: false },
        { src: Plankton, name: 'Plankton', found: false }
      ]
    },
    {
      index: 3,
      name: 'Lego',
      levelPicture: LegoLevel,
      characters: [
        { src: redBlock, name: 'Red Block', found: false },
        { src: BlueBlock, name: 'Blue Block', found: false },
        { src: WhiteBlock, name: 'White Block', found: false }
      ]
    },
    {
      index: 4,
      name: 'Pokemon',
      levelPicture: PokemonLevel,
      characters: [
        { src: Pikachu, name: 'Pikachu', found: false },
        { src: Kyogre, name: 'Kyogre', found: false },
        { src: Gardevoir, name: 'Gradevoir', found: false }
      ]
    },
  ]);

  const location = useLocation();
  const idRegex = /\d+/;

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage levels={levels} />} />
        <Route path='/level/*' element={<LevelPage levels={levels} level={levels[location.pathname.match(idRegex)]} setLevels={setLevels} />} />
        <Route path='/end/*' element={<EndPage level={levels[location.pathname.match(idRegex)]} />} />
      </Routes>
    </div>
  );
}

export default App;
