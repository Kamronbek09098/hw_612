export default function Title({page, title = ""}) {
  return <div className="flex flex-row items-center gap-2 h-11 pl-8 text-[14px] font-medium">
    <img className="w-5 h-5" src="/home 1.svg" alt="icon"/>
    <p className="text-[#6D7274]">Asosiy</p>
    <img className="w-2 h-2" src="/Frame 1.svg" alt="icon"/>
    <p className="text-[#6D7274]">{page}</p>
    {title && <>
      <img className="w-2 h-2" src="/Frame 1.svg" alt="icon"/>
      <p className="text-[#F7F9FA]">{title}</p>
    </>}
  </div>;
}
