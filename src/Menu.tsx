export default function Menu() {
  return <div className="flex flex-row justify-between items-center w-full h-19 bg-[#1A1D1F] rounded-2xl border border-[#272B30] pl-5.5 pr-4.5">
    <div className="flex flex-row items-center gap-5 w-84">
      <img className="w-26 h-10" src="/Group 2.svg" alt="logo"/>
      <div className="w-px h-6 bg-[#3D4549]"></div>
      <button className="flex flex-row items-center gap-2 text-white text-[15px] font-medium">
        O'zbekcha
        <img className="w-6 h-6 rotate-z-90" src="/chevron-forward-outline 1.svg" alt="icon"/>
      </button>
    </div>

    <div className="flex flex-row gap-10 pt-2.5 text-[14px] font-medium">
      <div className="flex flex-col gap-2">
        <p className="text-[#F7F9FA]">Asosiy</p>
        <div className="w-full h-0.5 bg-[#1C92E0] rounded-xs"></div>
      </div>
      <p className="text-[#F7F9FA]/70 hover:text-[#F7F9FA]">Yangiliklar</p>
      <p className="text-[#F7F9FA]/70 hover:text-[#F7F9FA]">Kurslar</p>
      <p className="text-[#F7F9FA]/70 hover:text-[#F7F9FA]">Kutubxona</p>
      <p className="text-[#F7F9FA]/70 hover:text-[#F7F9FA]">Bog'lanish</p>
    </div>

    <div className="flex flex-row items-center gap-5 w-84">
      <div className="flex flex-row gap-6">
        <button><img className="w-6 h-6" src="/search-outline 2.svg" alt="icon"/></button>
        <button><img className="w-6 h-6" src="/Component 1.svg" alt="icon"/></button>
        <button><img className="w-6 h-6" src="/notifications-outline 1.svg" alt="icon"/></button>
      </div>
      <div className="w-px h-6 bg-[#3D4549]"></div>
      <div className="flex flex-row items-center gap-1.5">
        <p className="text-[#F7F9FA] text-[16px]">Jasurbek Pulatov</p>
        <img className="w-8 h-8 rounded-2xl border border-[#F7F9FA]/30" src="/Ellipse 3.png" alt="image"/>
      </div>
    </div>
  </div>;
}
