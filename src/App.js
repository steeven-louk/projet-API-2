import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './components/pages/DetailPage';
//import Card from './components/Card';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='*'  element={<Home />} />
         <Route path='/details' element={<DetailPage />}>
            <Route path=':id' element={<DetailPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
