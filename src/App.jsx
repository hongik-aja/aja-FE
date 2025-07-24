import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { KakaoRedirect } from './pages/KakaoRedirect'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="/auth/callback" element={<KakaoRedirect/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;