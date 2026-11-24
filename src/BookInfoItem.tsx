export default function BookInfoItem({icon, label, value}) {
  return <div className="flex flex-col gap-0.5 w-46.75 h-15.5 border border-[#2C2F31] p-3">
    <div className="flex flex-row items-center gap-1">
      <img className="w-4 h-4" src={icon} alt="icon"/>
      <p className="text-[#9DA1A3] text-[14px] leading-[1.3]">{label}</p>
    </div>
    <p className="text-[#F7F9FA] text-[14px] font-medium leading-[1.3]">{value}</p>
  </div>;
}





