import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import login from '../apis/auth';
import {useAuthStore} from '../stores/useAuthStore'

export const KakaoRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (!code) {
      alert('인가 코드 없음');
      navigate('/login');
      return;
    }

    const kakaoLogin = async () => {
      try {
        const { accessToken, refreshToken } = await login(code);
        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        alert('로그인 실패');
        navigate('/login');
      }
    };

    kakaoLogin(); 

    console.log('카카오 인가 코드:', code);
  }, [location.search, navigate, setTokens]);

  return <>로딩중...</>;
};