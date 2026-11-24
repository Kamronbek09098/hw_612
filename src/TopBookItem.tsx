export default function TopBookItem({author, title, image}) {
  return <div className="flex flex-row gap-2.5">
    <img className="w-13.5 h-20 rounded-lg object-cover" src={image} alt="image"/>
    <div className="flex flex-col w-57.5">
      <h2 className="w-50 h-10.5 text-[#F7F9FA] text-[14px] font-bold">{title}</h2>
      <p className="text-[13px] text-[#F0F0F0]/72">{author}</p>
    </div>
  </div>
}
