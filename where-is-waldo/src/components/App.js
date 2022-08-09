import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
