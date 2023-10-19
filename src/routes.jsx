import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import FilmePage from './pages/Filme';
import Header from './components/Header';
import Erro from "./pages/Erro";
import FavoritosPage from './pages/Favoritos';

function RoutesApp() {
    return (
        <BrowserRouter>
         <Header />
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/filme/:id" element={ <FilmePage/> } />
                <Route path='/favoritos' element={ <FavoritosPage/> } />

                <Route path="*" element={ <Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;