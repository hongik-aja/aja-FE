import { Outlet } from 'react-router-dom';

export const Community = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        커뮤니티 페이지입니다
        <Outlet />
      </main>
    </div>
  );
};
