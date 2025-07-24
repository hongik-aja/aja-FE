export function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Hi!</h2>
          <p className="text-sm text-gray-500">내용 추가해야됨!!!!!</p>
        </div>

        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">교육 카테고리 선택</h3>
          <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">          <p className="main-com-font">커뮤니티</p>
          <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>

          
          
          <p className="main-com-font">혜택 쿠폰</p>
          <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>

        </div>
      </div>
    </div>
  );
}
