import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadAllProducts from './utils/DataFetch';
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import GameOver from "./pages/GameOver/GameOver";
import NoPage from './pages/NoPage/NoPage';

function App() {
  const [result, setResult] = useState("");
  const [lives, setLives] = useState(3);
  const [productsWithMilk, setProductsWithMilk] = useState([]);
  const [productsWithoutMilk, setProductsWithoutMilk] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadAllProducts();
      if (data.error) {
        setError(data.error);
      } else {
        setProductsWithMilk(data.productsWithMilk);
        setProductsWithoutMilk(data.productsWithoutMilk);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleResultChange = (gameresult) => {
    setResult(gameresult);
  };

  const handleLives = (currentLives) => {
    setLives(currentLives);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path='/gameover' element={<GameOver setLives={setLives} />} />
          <Route path="/" element={<Layout />}>
            
            <Route
              path='/game'
              element={
                <Game
                  setResult={handleResultChange}
                  setLives={handleLives}
                  lives={lives}
                  productsWithMilk={productsWithMilk}
                  productsWithoutMilk={productsWithoutMilk}
                />
              }
            />
            <Route path='/result' element={<Result result={result} />} />
            
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
