// src/pages/CategoryDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EducationList } from '../components/education/EducationList';

const sectionList = [
  { key: 'etiquette', label: '기본 예절' },
  { key: 'phrases',   label: '회화' },
  { key: 'mistakes',  label: '자주 하는 실수' },
  { key: 'qa',        label: 'Q&A' },
];

// 객체 배열 형태로 데이터 구성
const contentData = {
  식문화: {
    etiquette: [
      {
        title: '밥그릇은 들지 않기',
        description:
          '한국에서는 밥그릇을 들고 먹지 않아요. 그릇을 식탁에 놓고 고개를 약간 숙여 먹습니다.',
      },
      {
        title: '숟가락과 젓가락 놓기',
        description:
          '젓가락은 오른쪽, 숟가락은 왼쪽에 가지런히 놓습니다.',
      },
      {
        title: '공용 반찬 함께 쓰기',
        description:
          '공용 반찬을 나눌 땐 작은 그릇에 덜어서 사용하세요.',
      },
      {
        title: '소리 내지 않고 먹기',
        description:
          '국이나 국수를 먹을 땐 소리를 너무 크게 내지 않는 것이 예의입니다.',
      },
    ],
     phrases: [
      { title: '들어가기',      
        description: `이모님(사장님) 안녕하세요.
        [Imo(sajangnim) annyeonghasaeyo]` },
      { title: '주문하기',       
        description: `주문할게요
        [Jumun halgaeyo]` },
      { title: '감사인사하기', 
        description: `감사합니다
        [Gamsahapnida]` },
      { title: '부르기', 
        description: `사장님~ 이모님~
        [Sajangnim~ Imonim~]` },
    ],
    mistakes: [
      {
        title: '밥그릇 들고 먹기',
        description:
          '한국에서는 밥그릇을 들고 먹지 않습니다. 그릇은 식탁 위에 두고 고개를 약간 숙여 드세요.',
      },
      {
        title: '젓가락으로 공용 반찬 직접 집기',
        description:
          '공용 반찬은 개인 접시에 덜어서 사용해야 합니다. 젓가락을 그릇에 직접 넣으면 실례가 됩니다.',
      },
      {
        title: '국그릇을 손에 들고 소리 내기',
        description:
          '국이나 국수를 먹을 때는 그릇을 들지 않고, 소리도 크게 내지 않는 것이 예의입니다.',
      },
      {
        title: '음식점에서 서서 먹기',
        description:
          '한국에서는 자리에 앉아 식사하는 것이 기본이며, 서서 먹는 것은 무례로 여겨질 수 있습니다.',
      },
    ],
    qa: [
      {
        title: '물은 셀프인가요?',
        description:
          '가게마다 다르지만, 별도 안내가 없으면 직원이 물을 가져다 줍니다. 셀프인 경우 테이블 옆에 물통이 비치되어 있습니다.',
      },
      {
        title: '추가 반찬은 무료인가요?',
        description:
          '식당에 따라 다르나, 대부분의 한식당에서는 무료로 리필이 가능합니다. 부족할 때는 “반찬 추가 부탁드립니다”라고 말씀하세요.',
      },
      {
        title: '계산은 어디서 하나요?',
        description:
          '식사 후 계산대에서 직접 결제하거나, 자리에서 직원에게 “계산 부탁드립니다”라고 요청하면 처리해 줍니다.',
      },
      {
        title: '음식 포장은 가능한가요?',
        description:
          '대부분의 식당에서 가능하지만, 메뉴나 가게 정책에 따라 다를 수 있으니 미리 확인하는 것이 좋습니다.',
      },
    ],
  },
};

export function CategoryDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = contentData[category] || {};
  const [section, setSection] = useState('etiquette');

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-8">{category}</h2>

      <div className="grid grid-cols-4 border-b border-sub2">
        {sectionList.map((sec) => (
          <button
            key={sec.key}
            className={`py-5 rounded-t-[8px] 
               ${section === sec.key
                 ? 'bg-sub text-white'
                 : 'bg-white text-black'}
               hover:bg-gray-200 transition`}
            onClick={() => setSection(sec.key)}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* 리스트 렌더링 */}
      <EducationList items={data[section] || []} />
    
    </div>
  );
}