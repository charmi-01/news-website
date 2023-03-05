import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NewsMainData from './components/NewsMainData';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div >
      <BrowserRouter>
      <HelmetProvider>

      <Header/>
      <Routes>
        <Route path='/news-website' element={<Home/>}/>
        <Route path="/news-website/:id" element={<NewsMainData/>}/>
      </Routes>
      </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
