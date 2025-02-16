import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormPage from './pages/FormPage/index.jsx';
import ListPage from './pages/ListPage/index.jsx';
import ItemPage from './pages/ItemPage/index.jsx';
//import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline />
                <Container>
                    <Routes>
                        <Route path="/list" element={<ListPage />} />
                        <Route path="/item/:id" element={<ItemPage />} />
                        <Route path="/form/:id?" element={<FormPage />} />
                    </Routes>
                </Container>
            </LocalizationProvider>
        </Router>
    );
}

export default App;
