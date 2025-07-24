import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function PostDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(['카미야']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments((prev) => [...prev, comment]);
    setComment('');
  };

  return (
    <div className="bg-[#FBFBF3] min-h-screen py-6 flex justify-center">
      <div className="flex w-[1076px] gap-6">
        {/* 왼쪽 본문 */}
        <div className="flex-1">
          {/* 제목 */}
          <h1 className="text-[24px] font-Pretendard font-bold mb-6">커뮤니티</h1>

        {/* 게시글 */}
        <div className="bg-white rounded-[12px] p-8 mb-6">
        <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
            <span className="text-sm font-Pretendard text-[#5E5E5E]">작성자</span>
        </div>

        <h2 className="text-xl font-Pretendard font-bold text-black mb-4 leading-snug">
            홍대에 맛있는 밥집 있을까?
        </h2>

        <p className="text-sm font-Pretendard text-[#5E5E5E] mb-8 leading-relaxed">
            오늘 놀러갈거야
        </p>

        <p className="text-sm font-Pretendard text-[#5E5E5E]">댓글 {comments.length}</p>
        </div>

          {/* 댓글 입력 */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-[#E6EAF0] rounded-[8px] overflow-hidden mb-3"
          >
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요"
              className="flex-1 px-4 py-[10px] bg-transparent focus:outline-none text-sm font-Pretendard placeholder-[#5E5E5E]"
            />
            <button
              type="submit"
              className="bg-[#594A42] text-white text-sm font-Pretendard px-4 py-[10px] rounded-none"
            >
              전송
            </button>
          </form>

          {/* 댓글 리스트 */}
          {comments.map((c, i) => (
            <div key={i} className="bg-white rounded-[12px] p-4 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <span className="text-sm font-Pretendard text-[#5E5E5E]">작성자</span>
              </div>
              <p className="text-sm text-black">{c}</p>
            </div>
          ))}
        </div>

        {/* 사이드 영역 */}
        <div className=" w-[260px] h-fit rounded-[12px] bg-white p-4 mt-[55px]">
          <h3 className="com-edu-go">관련 학습 바로가기</h3>
          <div className="flex flex-col gap-2">
            <button className="com-edu-button">
              식사 <span className="text-lg">➔</span>
            </button>
            <button className="com-edu-button">
              실내 <span className="text-lg">➔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}