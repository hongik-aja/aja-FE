import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import {Community} from './pages/Community';
import {Login} from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 px-6">
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

