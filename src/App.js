import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NewsMainData from './components/NewsMainData';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<NewsMainData />} />
      </Routes>
    </>
  );
}

export default App;
