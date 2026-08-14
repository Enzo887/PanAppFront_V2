import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout';
import { PaginaProductos } from './pages/PaginaProductos';
import { PaginaCuenta } from './pages/PaginaCuenta';
import { PaginaHistorial } from './pages/PaginaHistorial';

function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<PaginaCuenta/>} />
            <Route path='/productos' element={<PaginaProductos/>} />
            <Route path='/historial' element={<PaginaHistorial/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;