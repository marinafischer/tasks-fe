import './App.css';
import Provider from './context/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login/> } />
          <Route path="/tasks" element={ <Tasks/> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
