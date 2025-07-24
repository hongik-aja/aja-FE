import React from 'react';

export default function CategoryCard({ name, iconSrc, onClick }) {
  return (
    <div
      className="
        border border-gray-300
        bg-white
        rounded-lg
        w-[249px]
        h-[200px]
        cursor-pointer
        hover:bg-gray-100
        transition
        flex
        flex-col
        items-center 
        justify-center
        shadow-[3px_4px_8px_0px_#00000040]
      "
      onClick={() => onClick(name)}
    >
      {/* 아이콘 이미지 */}
      <img
        src={iconSrc}
        alt={`${name} 아이콘`}
        className="w-16 h-16 mb-4"
      />
      <span className="text-center text-[24px] font-medium">
        {name}
      </span>
    </div>
  );
}