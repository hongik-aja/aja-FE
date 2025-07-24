export function EducationList({ items }) {
  return (
    <ul className="flex p-16 flex-col gap-10 bg-white">
      {items.map((item, idx) => (
        <li key={idx} className="border-b pb-10">
          <h3 className="text-lg font-semibold pb-8">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}