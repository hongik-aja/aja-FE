import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileIcon from '../assets/profile-icon.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {s
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white fixed top-0 left-0 z-50">
      {/* 좌측 로고 */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold text-violet-600">화면 메인페이지로 가는 좌측 메인로고</h1>
        </Link>
      </div>

      
      {/* 우측 Sign In */}
      <div className="hidden md:flex items-center gap-6 ml-4">
        <Link to="/signin" className="flex items-center gap-1 text-sm text-gray-800 hover:underline">
          Sign In
        </Link>
        <Link to="/community">
          <p className="text-sm text-gray-500">커뮤니티</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
