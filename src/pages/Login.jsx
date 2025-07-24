// src/pages/Login.jsx
import React from 'react';
import kakaoLogo from '../assets/kakao-icon.svg';

export const Login = () => {
  const REDIRECT_URI    = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const REST_API_KEY    = import.meta.env.VITE_KAKAO_API_KEY;
  const kakaoURL        = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <main className="flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-[0_4px_12px_0_#00000010] p-8">
        <h1 className="text-center text-2xl font-semibold text-[#191919] mb-6">
          카카오톡으로 간편하게 로그인하고<br />
          서비스를 이용해보세요!
        </h1>
        <button
          onClick={handleLogin}
          className="
            flex items-center justify-center gap-2
            w-full py-3 rounded-md
            bg-[#FEE500] text-[#191919]
            hover:bg-[#f8e600]
            transition
          "
        >
          <img src={kakaoLogo} alt="kakao" className="w-6 h-6" />
          <span className="text-base font-semibold">카카오로 계속하기</span>
        </button>
      </div>
    </main>
  );
};