import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import CategoryGrid from '../components/category/CategoryGrid';
import { Profile } from '../components/profile/Profile';
import profileImage from '../assets/profile.jpeg';

export const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="pt-8">
        {/* 로그인한 경우만 사용자 프로필 렌더링 */}
        {true && (
          <Profile
            name="이승찬"
            imageUrl={profileImage}
          />
        )}

        <CategoryGrid onSelect={(cat) => navigate(`/category/${encodeURIComponent(cat)}`)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">          <p className="main-com-font">커뮤니티</p>
          <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>

          
          
          <p className="main-com-font">혜택 쿠폰</p>
          <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>

        </div>
      </div>
    </div>
  );
};