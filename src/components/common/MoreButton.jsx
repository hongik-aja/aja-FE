import arrow from '../../assets/arrow.svg';

export const MoreButton = ({ onClick }) => {
  return (
    <button className='text-[14px] p-[10] flex items-center' onClick={onClick}>
     <span className='mr-2'>더보기</span>
      <img src={arrow} className='w-4 h-4' alt="arrow" />
    </button>
  )
}