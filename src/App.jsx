import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { KakaoRedirect } from './pages/KakaoRedirect'
import {CategoryDetail} from './pages/CategoryDetail';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="/auth/callback" element={<KakaoRedirect/>} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/category/:category" element={<CategoryDetail />} />
          <Route path="/community/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

