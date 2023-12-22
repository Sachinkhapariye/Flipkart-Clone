import { Box } from '@mui/material';
import './App.css';
import Header from './component/header/Header';
import Home from './component/navigationStore/Home';
import DataProvider from './context/dataProvider';
import DetailViews from './component/navigationStore/deatails/DetailView';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './component/cart/Cart'
function App() {
  return (
    <BrowserRouter>
        <DataProvider>
          <Header />
          <Box style={{marginTop:60}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailViews/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Box>
        </DataProvider>
    </BrowserRouter>
  );
}

export default App;
