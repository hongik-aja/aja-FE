export function Profile({ name, imageUrl }) {
  return (
    <div className="flex items-center gap-8">
      <img
        src={imageUrl}
        alt={`${name}의 프로필 사진`}
        className="w-20 h-20 rounded-full object-cover border"
      />
      <div>
        <h2 className="text-[32px] font-normal text-gray-900">{name}</h2>
      </div>
    </div>
  );
}