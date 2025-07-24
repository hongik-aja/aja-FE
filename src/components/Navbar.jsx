import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-40 py-4 flex justify-between items-center">
      {/* 좌측 로고 */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold text-yellow">
            좌측 메인로고
          </h1>
        </Link>
      </div>

      {/* 우측 메뉴 */}
      <div className="hidden md:flex items-center gap-6 ml-4">
         <Link to="/Layout" className="text-base text-gray-500 hover:underline">
          교육
        </Link>
        <Link to="/Community" className="text-base text-gray-500 hover:underline">
          커뮤니티
        </Link>
        <Link to="/Login" className="flex items-center gap-1 text-base text-gray-500 hover:underline">
         로그인
        </Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
