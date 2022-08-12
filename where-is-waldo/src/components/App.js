import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header';
import LevelPage from './LevelPage/LevelPage';

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
  // won't modify
  const levels = [
    {
      index: 0,
      name: `Waldo`,
      levelPicture: WaldoLevel,
      characters: [
        { src: Waldo, name: 'Waldo' },
        { src: Odlaw, name: 'Odlaw' },
        { src: Wizard, name: 'Wizard' }
      ],
    },
    {
      index: 1,
      name: `Minecraft`,
      levelPicture: MinecraftLevel,
      characters: [
        { src: Diamond, name: 'Diamond' },
        { src: Latern, name: 'Lantern' },
        { src: WitherSkull, name: 'Wither Skull' }
      ]
    }, {
      index: 2,
      name: 'SpongeBob',
      levelPicture: SpongeBobLevel,
      characters: [
        { src: Patrick, name: 'Patrick' },
        { src: Caveman, name: 'Caveman SpongeBob' },
        { src: Plankton, name: 'Plankton' }
      ]
    },
    {
      index: 3,
      name: 'Lego',
      levelPicture: LegoLevel,
      characters: [
        { src: redBlock, name: 'Red Block' },
        { src: BlueBlock, name: 'Blue Block' },
        { src: WhiteBlock, name: 'White Block' }
      ]
    },
    {
      index: 4,
      name: 'Pokemon',
      levelPicture: PokemonLevel,
      characters: [
        { src: Pikachu, name: 'Pikachu' },
        { src: Kyogre, name: 'Kyogre' },
        { src: Gardevoir, name: 'Gradevoir' }
      ]
    },
  ];

  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage levels={levels} />} />
        <Route path='/*' element={<LevelPage level={levels[location.pathname.slice(1)]} />} />
      </Routes>
    </div>
  );
}

export default App;
