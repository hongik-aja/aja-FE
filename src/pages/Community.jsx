import searchIcon from '../assets/search.png';
import plusIcon from '../assets/plus.png';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <div className="bg-[#FBFBF3] w-full min-h-screen flex justify-center py-6">
      {/* 기준이 되는 고정 폭 wrapper */}
      <div className="w-[1076px]">
        {/* 제목 */}
        <h1 className="text-2xl font-bold mb-4">커뮤니티</h1>

        {/* 검색창 */}
        <form className="flex items-center w-[840px] h-[44px] px-3 mb-4 border border-gray-300 rounded-md bg-white">
          <input
            type="text"
            className="flex-1 h-full text-sm placeholder-gray-400 focus:outline-none"
            placeholder="검색"
          />
          <button type="submit">
            <img src={searchIcon} alt="검색" className="w-5 h-5 ml-2" />
          </button>
        </form>

        {/* 카테고리 필터 */}
        <div className="h-[44px] flex items-center gap-[48px] px-[22px] bg-white border-b border-[#3C434F]">
          <button className="text-[#9B7859] text-[16px] font-normal">전체</button>
          <button className="text-black text-[16px] font-normal">식사</button>
          <button className="text-black text-[16px] font-normal">화장실</button>
          <button className="text-black text-[16px] font-normal">관광지</button>
          <img src={plusIcon} alt="추가" className="w-5 h-5" />
        </div>

        {/* 게시글 리스트 */}
        <div className="bg-white rounded-md">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3 border-b last:border-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <div className="px-2 py-1 rounded text-sm font-medium">Lion</div>

                {/* 제목을 클릭 가능하도록 Link로 변경 */}
                <Link
                  to={`/community/${i}`}
                  className="px-2 py-1 rounded text-sm hover:underline text-black"
                >
                  I love hongdae
                </Link>
              </div>
              <div className="px-2 py-1 rounded text-sm text-gray-500">
                2025년 7월 6일
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
