import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />}/>
      </Routes>
  </BrowserRouter>
)
