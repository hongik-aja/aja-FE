import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import CategoryGrid from '../components/category/CategoryGrid';
import { Profile } from '../components/profile/Profile';
import profileImage from '../assets/profile.jpeg';
import coupon from '../assets/coupon.png';
import { MoreButton } from '../components/common/MoreButton';

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

        <div className="bg-[#FBFBF3] min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-header font-bold">커뮤니티</h2>
              <MoreButton onClick={() => console.log('혜택 더보기 클릭')} />
          </div>

          <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
            {Array(5).fill().map((_, i) => (
              <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer transition">
                <p className="font-medium">오늘 홍대에 갔는데 잠바를 가져갈 걸 그랬..</p>
                <p className="text-sm text-gray-500 mt-1">너무너무 춥더라</p>
              </div>
            ))}
          </div>
        </div>

<div className="flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <h2 className="text-header font-bold">혜택 보기</h2>
    <MoreButton onClick={() => console.log('혜택 더보기 클릭')} />
  </div>

  <div className="flex flex-col gap-6">
    <div className="bg-[#A57B57] rounded-xl h-48 w-full text-white">
      <img src={coupon} alt="쿠폰 아이콘" className="coupon" />
      <p className="text-base font-Pretendard leading-relaxed mt-[24px] ml-[34px]">
        커뮤니티에 마포구 밥집 추천 업로드 시<br />
        마포구에서 사용할 수 있는 쿠폰 제공
      </p>
    </div>

    <div className="bg-[#A57B57] rounded-xl h-48 w-full text-white">
      <img src={coupon} alt="쿠폰 아이콘" className="coupon" />
      <p className="text-base font-Pretendard leading-relaxed mt-[24px] ml-[34px]">
        커뮤니티에 마포구 밥집 추천 업로드 시<br />
        마포구에서 사용할 수 있는 쿠폰 제공
      </p>
    </div>
      </div>
    </div>

          </div>
        </div>
      </div>
    </div>

  );
};

