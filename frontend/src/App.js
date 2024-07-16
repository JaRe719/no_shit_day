
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import GameOver from "./pages/GameOver/GameOver";
import NoPage from './pages/NoPage/NoPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/game' element={<Game />}/>
          <Route path='/result' element={<Result />} />
          <Route path='/gameover' element={<GameOver />} />
          <Route path='*' element={<NoPage />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
