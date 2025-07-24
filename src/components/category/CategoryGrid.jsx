import CategoryCard from './CategoryCard';
import food from '../../assets/food.svg';
import toilet from '../../assets/toilet.svg';
import bus from '../../assets/bus.svg';
import street from '../../assets/street.svg';

import { MoreButton } from '../common/MoreButton';

const categories = [
  { name: '식문화',     iconSrc: food },
  { name: '화장실',   iconSrc: toilet },
  { name: '대중교통',   iconSrc: bus },
  { name: '길거리',   iconSrc: street },
  // 나머지 카테고리…
];

export default function CategoryGrid({ onSelect }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='w-full flex justify-between py-8'>
        <span className='text-header'>교육</span>
        <MoreButton onClick={() => console.log('더보기 클릭')} />
      </div>
      <div className="w-full grid lg: grid-cols-4 gap-10">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            iconSrc={cat.iconSrc}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}