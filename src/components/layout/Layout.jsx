import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-main">
      <Navbar />
      <main className="pt-20 flex flex-col items-center px-40 justify-center">
        <Outlet />
      </main>
    </div>
  );
};
