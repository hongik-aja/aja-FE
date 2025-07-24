//메인 페이지에서 카테고리 8개 나오는 부분
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        
      </main>
    </div>
  );
};
